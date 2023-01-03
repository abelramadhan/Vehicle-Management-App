import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import { useForm } from "@inertiajs/inertia-react";

export default function Requests(props) {
    const requests = JSON.parse(props.requests)
    const vehicles = JSON.parse(props.vehicles)
    const requestLogs = JSON.parse(props.request_logs)
    const user = props.auth.user

    const { data, setData, post, processing, errors, reset } = useForm({
        id: '',
        km_after: ''
    });

    const finish = (req_id) => {
        data.id = req_id
        post(route('finish_request'))
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const displayActive = () => {
        const activeReqs = requestLogs.filter(req => req.date_returned == null)
        return activeReqs.map((req) => {
            const requestedVehicle = vehicles.find(vehicle => vehicle.id === req.vehicle_id)
            return (
                <div className="row-span-2 col-start-2 flex flex-row p-5 justify-between shadow-sm bg-purple-50 rounded-md" key={req.id}>
                    <div className='flex flex-row gap-10'>
                        <div>
                            <h2 className="text-lg font-bold">{req.borrower_name}</h2>
                            <h3>{req.borrower_ssn}</h3>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold">{requestedVehicle.brand} {requestedVehicle.model}</h2>
                            <h3>{requestedVehicle.year}</h3>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold">{req.km_before}</h2>
                            <h3>Last Km</h3>
                        </div>
                    </div>
                    <div className="self-center justify-self-end flex gap-x-3">
                        <div>
                            <TextInput
                                id="km_after"
                                name="km_after"
                                placeholder="current Km"
                                value={data.km_after}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />
                        </div>
                        <button onClick={() => finish(req.id)} className="py-2 px-3 bg-green-400 text-white font-bold rounded-md hover:bg-green-500 transition-colors">
                            Finish
                        </button>
                    </div>
                </div>
            )
        })
    }

    const displayHistory = () => {
        const activeReqs = requestLogs.filter(req => req.km_after != null)
        return activeReqs.map((req) => {
            const requestedVehicle = vehicles.find(vehicle => vehicle.id === req.vehicle_id)
            return (
                <div className="row-span-2 col-start-1 p-5 justify-between bg-purple-50 rounded-md" key={req.id}>
                    <div className='grid grid-cols-4 grid-rows-1 gap-10'>
                        <div>
                            <h2 className="text-lg font-bold">{req.borrower_name}</h2>
                            <h3>{req.borrower_ssn}</h3>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold">{requestedVehicle.brand} {requestedVehicle.model}</h2>
                            <h3>{requestedVehicle.year}</h3>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold">{req.km_before}</h2>
                            <h3>Last Km</h3>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold">{req.km_after-req.km_before}</h2>
                            <h3>Km Driven</h3>
                        </div>
                    </div>
                    
                </div>
            )
        })
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="text-3xl font-bold text-gray-800 leading-tight">Requests</h2>}
        >
            <Head>
                <title>Dashboard</title>
                <script src="https://kit.fontawesome.com/7e91af3ffb.js" crossorigin="anonymous"></script>
            </Head>

            <div className="grid grid-cols-2 grid rows-3 place-items-stretch gap-7">
                <div className='bg-slate-50 p-6 rounded-md shadow-sm text-2xl font-medium'>
                    <h2>History</h2>
                </div>
                <div className='bg-slate-50 p-6 rounded-md shadow-sm text-2xl font-medium'>
                    <h2>Active</h2>
                </div>
                {displayHistory()}
                {displayActive()}
            </div>
        </AuthenticatedLayout>
    );
}
