import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import { useState } from 'react';

export default function Vehicles(props) {

    const [showForm, toggleShowForm] = useState(false);

    function displayVehicles() {
        const vehicles = JSON.parse(props.vehicles)
        if (vehicles.length === 0) {
            return (
                <h3>No Vehicles Listed</h3>
            )
        } else {
            return vehicles?.map((vehicle) => {
                return (
                    <div key={vehicle.id}
                        className='p-5 shadow-md flex flex-col text-slate-700 bg-green-50/50 rounded-md'>
                        <div>
                            <h1 className='text-2xl font-bold'>{vehicle.brand} {vehicle.model}</h1>
                            <h1>{vehicle.year}</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-y-5 gap-x-12 mt-2 w-fit '>
                            <h3>Owner :<br/> <span className='text-xl font-bold leading-3'>{vehicle.owner}</span></h3>
                            <h3>fuel type :<br/> <span className='text-xl font-bold leading-3'>{vehicle.fuel_type}</span></h3>
                            <h3>KMs Driven :<br/> <span className='text-xl font-bold leading-3'>{vehicle.km_driven} KM</span></h3>
                            <h3>last serviced :<br/> <span className='text-xl font-bold leading-3'>at {vehicle.km_last_service} KM</span></h3>
                        </div>
                    </div>
                )
            })
        }
    }

    const { data, setData, post, processing, errors, reset } = useForm({
        model: '',
        brand: '',
        year: '',
        owner: '',
        km_driven: '',
        km_last_service: '',
        fuel_type: '',
        fuel_consumption_rate: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('vehicles_add'));

        reset()
    };

    const toggleForm = () => {
        const reverse = !showForm
        toggleShowForm(reverse)
        reset()
    }

    const displayForm = () => {
        const display = 'hidden';
        if (showForm) {
            return (
                <form onSubmit={submit} className='grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-3 p-5 my-2 bg-slate-50 shadow-sm rounded-md transition-all'>
                    <div>
                        <InputLabel forInput="model" value="Model" />
                        <TextInput
                            id="model"
                            name="model"
                            value={data.model}
                            className="block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.model}/>
                    </div>
                    <div>
                        <InputLabel forInput="brand" value="Brand" />
                        <TextInput
                            id="brand"
                            name="brand"
                            value={data.brand}
                            className="block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.brand} />
                    </div>
                    <div>
                        <InputLabel forInput="year" value="Year" />
                        <TextInput
                            id="year"
                            name="year"
                            value={data.year}
                            className="block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.year} />
                    </div>
                    <div>
                        <InputLabel forInput="owner" value="Owner" />
                        <SelectInput
                            id="owner"
                            name="owner"
                            value={data.owner}
                            options={['Company', 'PT Sewa Mobil', 'PT Jaya Mobil']}
                            className="block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.owner} />
                    </div>
                    <div>
                        <InputLabel forInput="km_driven" value="Km Driven" />
                        <TextInput
                            id="km_driven"
                            name="km_driven"
                            type="number"
                            value={data.km_driven}
                            className="block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.km_driven} />
                    </div>
                    <div>
                        <InputLabel forInput="km_last_service" value="Km last serviced" />
                        <TextInput
                            id="km_last_service"
                            name="km_last_service"
                            type="number"
                            value={data.km_last_service}
                            className="block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.km_last_service} />
                    </div>
                    <div>
                        <InputLabel forInput="fuel_type" value="Fuel Type" />
                        <SelectInput
                            id="fuel_type"
                            name="fuel_type"
                            value={data.fuel_type}
                            options={['Regular', 'Premium', 'Diesel']}
                            className="block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.fuel_type} />
                    </div>
                    <div>
                        <InputLabel forInput="fuel_consumption_rate" value="Fuel Comsumption (L/Km)" />
                        <TextInput
                            id="fuel_consumption_rate"
                            name="fuel_consumption_rate"
                            type="number"
                            value={data.fuel_consumption_rate}
                            className="block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                        <InputError message={errors.fuel_consumption_rate} />
                    </div>
                    <PrimaryButton className="col-span-2 mt-2 bg-green-400 font-bold text-xl hover:bg-green-500" processing={processing}>
                        Submit
                    </PrimaryButton>
                </form>
            )
        }
        
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="text-3xl font-bold text-gray-800 leading-tight">Vehicles</h2>}
        >
            <Head>
                <title>Dashboard</title>
                <script src="https://kit.fontawesome.com/7e91af3ffb.js" crossorigin="anonymous"></script>
            </Head>

            <button onClick={toggleForm} className='flex flex-row items-center justify-between gap-x-3 bg-green-400 text-white font-bold shadow-sm px-4 py-3 rounded-md hover:bg-green-500 transition ease-in-out duration-150'>
                <h2>Add Vehicle</h2> <i class="fa-solid fa-plus"></i>
            </button>

            <div>
                {displayForm()}
            </div>

            <div className='flex flex-row mt-5 transition-all'>
                <div className="grid grid-cols-4 gap-5">
                    {displayVehicles()}
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}
