export default function VehicleUsage(props) {

    const vehicles = props.vehicles
    const requests = props.requests
    const requestLogs = props.requestLogs

    const requestVehicleId = requests.map(req => req.vehicle_id);
    const usedVehicleId = [...requestVehicleId]
    const unavailableVehicles = vehicles.filter((vehicle) => usedVehicleId.includes(vehicle.id))
    const carCount = {
        used: unavailableVehicles.length,
        avalaible: (vehicles.length - unavailableVehicles.length)
    }




    return (
        <div className="flex flex-row gap-x-5 shadow-sm items-center justify-around bg-slate-50 py-4 px-8 rounded-md grow">
            <div>
                <div className="flex flex-row gap-x-6 items-center  font-bold ">
                    <i class="fa-solid fa-car text-6xl text-red-400"></i>
                    <h2 className="text-6xl">{carCount.used}</h2>
                </div>
                <h3 className="text-lg font-medium mt-2">Vehicles in Use</h3>
            </div>
            <div>
                <div className="flex flex-row gap-x-6 items-center  font-bold ">
                    <i class="fa-solid fa-car text-6xl text-green-400"></i>
                    <h2 className="text-6xl">{carCount.avalaible}</h2>
                </div>
                <h3 className="text-lg font-medium mt-2">Vehicles Available</h3>
            </div>

        </div>
    )
}