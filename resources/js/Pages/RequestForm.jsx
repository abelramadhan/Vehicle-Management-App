import SelectInputCustom from '@/Components/SelectInputCustom';
import PendingRequest from '@/DashboardComponents/PendingRequest';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function RequestForm(props) {

    const vehicles = JSON.parse(props.vehicles)
    const supervisors = JSON.parse(props.supervisors)

    const { data, setData, post, processing, errors, reset } = useForm({
        borrower_name: '',
        borrower_ssn: '',
        vehicle_id: '',
        supervisor_1: '',
        supervisor_2: '',
        duration_days: '',
    });



    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.supervisor_1 === data.supervisor_2) {
            alert('select 2 different supervisors')
            return
        }

        post(route('request_add'));
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="text-3xl font-bold text-gray-800 leading-tight">Apply Request</h2>}
        >
            <Head>
                <title>Apply Request</title>
                <script src="https://kit.fontawesome.com/7e91af3ffb.js" crossorigin="anonymous"></script>
            </Head>

            <div>
                <form onSubmit={submit} className='flex flex-col gap-3'>
                    <div>
                        <InputLabel forInput="borrower_name" value="Name" />

                        <TextInput
                            id="borrower_name"
                            name="borrower_name"
                            value={data.borrower_name}
                            className="mt-1 block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.borrower_name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel forInput="borrower_ssn" value="SSN" />

                        <TextInput
                            id="borrower_ssn"
                            name="borrower_ssn"
                            value={data.borrower_ssn}
                            className="mt-1 block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.borrower_ssn} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel forInput="vehicle_id" value="Select Vehicle" />

                        <SelectInputCustom
                            id="vehicle_id"
                            name="vehicle_id"
                            value={data.vehicle_id}
                            options={[...vehicles]}
                            valueName='id'
                            optionName={['brand', 'model', 'year']}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.vehicle_id} className="mt-2" />
                    </div>

                    <div className='flex flex-row gap-x-3'>
                        <div className='grow'>
                            <InputLabel forInput="supervisor_1" value="Supervisor 1" />

                            <SelectInputCustom
                                id="supervisor_1"
                                name="supervisor_1"
                                value={data.supervisor_1}
                                options={[...supervisors]}
                                valueName='ssn'
                                optionName={['name']}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.supervisor_1} className="mt-2" />
                        </div>
                        <div className='grow'>
                            <InputLabel forInput="supervisor_2" value="Supervisor 2" />

                            <SelectInputCustom
                                id="supervisor_2"
                                name="supervisor_2"
                                value={data.supervisor_2}
                                options={[...supervisors]}
                                valueName='ssn'
                                optionName={['name']}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.supervisor_2} className="mt-2" />
                        </div>
                    </div>

                    <div>
                        <InputLabel forInput="duration_days" value="Duration (days)" />

                        <TextInput
                            id="duration_days"
                            name="duration_days"
                            value={data.duration_days}
                            type="number"
                            className="mt-1 block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />

                        <InputError message={errors.duration_days} className="mt-2" />
                    </div>

                    <PrimaryButton className="col-span-2 mt-2 bg-green-400 font-bold text-xl hover:bg-green-500" processing={processing}>
                        Submit
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
