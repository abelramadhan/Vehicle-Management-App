

export default function PendingRequest(props) {
    
    const getTotalPendingRequest = () => {
        const request = props.request
        let count = 0
        request.forEach(req => {
            if (!req.approval_1 || !req.approval_2) {
                count++
            }
        });
        return count
    }

    return(
        <div className="flex flex-col gap-x-5 shadow-sm bg-slate-50 py-4 px-8 rounded-md">
            <div className="flex flex-row gap-x-3 items-center  font-bold ">
                <i class="fa-solid fa-hourglass-half text-4xl text-purple-500"></i>
                <h2 className="text-4xl">{getTotalPendingRequest()}</h2>
            </div>
            <h3 className="text-lg font-medium">Requests Pending</h3>
        </div>
    )
}