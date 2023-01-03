<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\VehicleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/vehicles', [VehicleController::class, 'index'])->middleware(['auth', 'verified'])->name('vehicles');
Route::get('/RequestForm', [RequestController::class, 'create'])->middleware(['auth', 'verified'])->name('request_form');

Route::post('/vehicles/add', [VehicleController::class, 'store'])->middleware(['auth', 'verified'])->name('vehicles_add');


Route::post('/request/add', [RequestController::class, 'store'])->middleware(['auth', 'verified'])->name('request_add');
Route::post('/request/approve', [RequestController::class, 'approve'])->middleware(['auth', 'verified'])->name('approve_request');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
