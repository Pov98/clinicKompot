<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class unitofmeasure extends Model
{
    use HasFactory;
    protected $table = "product_unit_of_measure";
    protected $fillable = [
        'id',
        'code',
        'unit_code',
        'unit_of_measure',
        'type',
        'bom_no',
        'quantity',
        'inactived',
        'is_deleted',
        'created_by',
        'updete_by',
    ];
}
