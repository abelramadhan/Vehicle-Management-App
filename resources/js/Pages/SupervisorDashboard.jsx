import PendingRequest from '@/DashboardComponents/PendingRequest';
import RequestList from '@/DashboardComponents/RequestList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';

export default function SupervisorDashboard(props) {

    let requests = JSON.parse(props.requests)
    let vehicles = JSON.parse(props.vehicles)
    const ssn = props.auth.user.ssn
    console.log(props.auth.user.ssn)
    requests = requests.filter(req => 
        (req.supervisor_1 === ssn && !req.approval_1) 
        || (req.supervisor_2 === ssn && !req.approval_2))

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="text-3xl font-bold text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head>
                <title>Dashboard</title>
                <script src="https://kit.fontawesome.com/7e91af3ffb.js" crossorigin="anonymous"></script>
            </Head>

            <div className="grid grid-cols-2 grid rows-auto">
                <div className="flex flex-col gap-y-4">
                    <PendingRequest request={requests}>
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </PendingRequest>

                    <RequestList requests={requests} vehicles={vehicles} user={props.auth.user}/>
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
