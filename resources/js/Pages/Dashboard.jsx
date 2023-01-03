import PendingRequest from '@/DashboardComponents/PendingRequest';
import UsageGraph from '@/DashboardComponents/UsageGraph';
import VehicleUsage from '@/DashboardComponents/VehicleUsage';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const requests = JSON.parse(props.requests)
    const vehicles = JSON.parse(props.vehicles)
    const requestLogs = JSON.parse(props.request_logs)
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

            <div className="grid grid-cols-3 grid rows-3 place-items-stretch gap-7">
                <div className="flex flex-col gap-y-4">
                    <PendingRequest request={requests}>
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </PendingRequest>
                    <Link href={route('request_form')} className='flex flex-row items-center justify-between gap-x-3 bg-green-400 text-white font-bold shadow-sm px-4 py-3 rounded-md hover:bg-green-500 transition ease-in-out duration-150'>
                        <h2>New Request</h2> <i class="fa-solid fa-plus"></i>
                    </Link>
                </div>

                <div className="flex flex-col gap-y-4 h-full">
                    <VehicleUsage requests={requests} vehicles={vehicles} requestLogs={requestLogs} />
                </div>

                <div className="flex flex-col gap-y-4 h-full col-start-1 col-span-2 row-start-2">
                    <UsageGraph requests={requests} vehicles={vehicles} requestLogs={requestLogs} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
