<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'borrower_name',
        'borrower_ssn',
        'vehicle_id',
        'km_before',
        'km_after',
        'date_given',
        'date_returned',
    ];
    

    public $timestamps = false;
}
