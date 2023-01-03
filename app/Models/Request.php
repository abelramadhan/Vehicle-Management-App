<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    protected $fillable = [
        'borrower_name',
        'borrower_ssn',
        'vehicle_id',
        'request_date',
        'supervisor_1',
        'supervisor_2',
        'approval_1',
        'approval_2',
        'duration_days',
    ];
    

    public $timestamps = false;
}
