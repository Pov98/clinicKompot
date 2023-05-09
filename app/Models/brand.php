<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class brand extends Model
{
    use HasFactory;
    protected $table = "product_brand";
    protected $fillable = [
        'id',
        'brand_code',
        'brand_name',
        'brand_name_2',
        'inactived',
        'is_deleted',
        'created_by',
        'updete_by',
        'delete_by',
    ];

    public function brand()
    {
        return $this->belongsTo(Post::class, 'brand_code');
    }
}
