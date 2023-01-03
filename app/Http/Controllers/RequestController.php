<?php

namespace App\Http\Controllers;

use App\Models\Request as ModelsRequest;
use App\Models\RequestLog;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class RequestController extends Controller
{
    //
    public function create()
    {
        $vehiclesInUse = DB::table('requests')->pluck('vehicle_id')->all();
        $vehicles = DB::table('vehicles')->whereNotIn('id', $vehiclesInUse)->get(['id', 'model', 'brand', 'year'])->toJson();
        $supervisors = DB::table('users')->where('role', '=', 'Supervisor')->get(['id', 'ssn', 'name'])->toJson();

        return Inertia::render('RequestForm', [
            'vehicles' => $vehicles,
            'supervisors' => $supervisors
        ]);
    }

    public function store(Request $request)
    {
        $supervisor1 = $request->supervisor_1;
        $supervisor2 = $request->supervisor_2;
        $request->validate([
            'borrower_name' => 'required|string',
            'borrower_ssn' => 'required|string',
            'vehicle_id' => 'required',
            'supervisor_1' => 'required|string|different:' . $supervisor2,
            'supervisor_2' => 'required|string|different:' . $supervisor1,
            'duration_days' => 'required|integer'
        ]);

        $requests = ModelsRequest::create([
            'borrower_name' => $request->borrower_name,
            'borrower_ssn' => $request->borrower_ssn,
            'vehicle_id' => $request->vehicle_id,
            'supervisor_1' => $request->supervisor_1,
            'supervisor_2' => $request->supervisor_2,
            'duration_days' => $request->duration_days,
            'approval_1' => false,
            'approval_2' => false,
            'request_date' => now()
        ]);

        $requests->save();

        return redirect(route('dashboard'));
    }

    public function approve(Request $request)
    {
        $request_id = $request->id;
        $supervisor_ssn = $request->ssn;
        $request_object = ModelsRequest::find($request_id);

        if ($request_object->supervisor_1 == $supervisor_ssn) {
            $request_object->approval_1 = true;
        } else {
            $request_object->approval_2 = true;
        }


        if ($request_object->approval_1 && $request_object->approval_2) {
            $vehicle_id = $request_object->vehicle_id;
            $vehicle = Vehicle::find($vehicle_id);

            $request_log = RequestLog::create([
                'vehicle_id' => $vehicle_id,
                'borrower_name' => $request_object->borrower_name,
                'borrower_ssn' => $request_object->borrower_ssn,
                'km_before' => $vehicle->km_driven,
                'date_given' => now()   
            ]);

            $request_log->save();
        } else {
            $request_object->save();
        }

        return redirect(route('dashboard'));
    }
}
