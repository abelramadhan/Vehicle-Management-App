<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vehicles = DB::table('vehicles')->get()->toJson();
        return Inertia::render('Vehicles', ['vehicles' => $vehicles]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'model' => 'required|string|max:20',
            'brand' => 'required|string|max:20',
            'year' => 'required|integer',
            'owner' => 'required|string|max:20',
            'km_driven' => 'required|integer',
            'km_last_service' => 'required|integer',
            'fuel_type' => 'required|string|max:20',
            'fuel_consumption_rate' => 'required|integer',
        ]);

        $vehicle = Vehicle::create([
            'model' => $request->model,
            'brand' => $request->brand,
            'year' => $request->year,
            'owner' => $request->owner,
            'km_driven' => $request->km_driven,
            'km_last_service' => $request->km_last_service,
            'fuel_type' => $request->fuel_type,
            'fuel_consumption_rate' => $request->fuel_consumption_rate
        ]);

        $vehicle->save();

        return redirect(route('vehicles'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function show(Vehicle $vehicle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function edit(Vehicle $vehicle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vehicle $vehicle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vehicle $vehicle)
    {
        //
    }
}
