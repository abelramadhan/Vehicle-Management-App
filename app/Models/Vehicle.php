<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = [
        'model',
        'brand',
        'year',
        'owner',
        'km_driven',
        'km_last_service',
        'fuel_type',
        'fuel_consumption_rate'
    ];

    public $timestamps = false;
}
