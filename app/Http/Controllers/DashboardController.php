<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    //
    public function index() {
        $requests = DB::table('requests')->get()->toJson();
        $vehicles = DB::table('vehicles')->get()->toJson();
        $request_logs = DB::table('request_logs')->get()->toJson();
        $user = Auth::user();
        $target = 'Dashboard';
        if ($user->role == 'Supervisor') {
            $target = 'SupervisorDashboard';
        } 
        return Inertia::render($target, [
        'requests' => $requests,
        'vehicles' => $vehicles,
        'request_logs' => $request_logs, ]);
    }
}
