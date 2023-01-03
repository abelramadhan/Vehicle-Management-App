<?php

namespace App\Exports;

use App\Models\RequestLog;
use App\Models\Vehicle;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Support\Facades\DB;

class RequestLogExport implements FromCollection
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $joined = DB::table('request_logs')
            ->join('vehicles', 'request_logs.vehicle_id', '=', 'vehicles.id')
            ->select('vehicles.model','vehicles.brand','vehicles.year','request_logs.*')
            ->get();

        return $joined;
    }
}
