<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class prescription_view extends Model
{
    use HasFactory;
    protected $table = "prescription_view";
    protected $fillable = [
            'simei_s',
            'simei_m',
            'simei_roma_s',
            'simei_roma_m',
            'id',
            'jusin_id',
            'jusinsya_id',
            'publish_ymd',
            'del_flg',
            'created_user_id',
            'created_at',
            'updated_at',
            'updated_user_id'  
    ];
}