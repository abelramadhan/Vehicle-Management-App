import { Link } from "@inertiajs/inertia-react"
import { useForm } from "@inertiajs/inertia-react";

export default function RequestList(props) {
    const requests = props.requests
    const vehicles = props.vehicles
    const user = props.user

    const { data, setData, post} = useForm({
        id: '',
        ssn: user.ssn,
    });

    const approve = (req_id) => {
        data.id = req_id
        post(route('approve_request'))
    };

    const displayRequests = () => {
        return requests.map((req) => {
            const requestedVehicle = vehicles.find(vehicle => vehicle.id === req.vehicle_id)
            return (
                <div className="flex flex-row p-5 justify-around shadow-sm gap-10 bg-purple-50 rounded-md" key={req.id}>
                    <div>
                        <h2 className="text-lg font-bold">{req.borrower_name}</h2>
                        <h3>{req.borrower_ssn}</h3>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold">{requestedVehicle.brand} {requestedVehicle.model}</h2>
                        <h3>{requestedVehicle.year}</h3>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold">{req.duration_days}</h2>
                        <h3>Days</h3>
                    </div>

                    <div className="self-center justify-self-end flex gap-x-3">
                        <button onClick={()=>approve(req.id)} className="py-2 px-3 bg-green-400 text-white font-bold rounded-md hover:bg-green-500 transition-colors">
                            Accept
                        </button>
                        <Link className="py-2 px-3 bg-red-400 text-white font-bold rounded-md hover:bg-red-500 transition-colors">
                            Decline
                        </Link>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            {displayRequests()}
        </div>
    )
    
}