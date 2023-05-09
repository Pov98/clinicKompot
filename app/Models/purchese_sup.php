<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class purchese_sup extends Model
{
    use HasFactory;
    protected $table = 'purchese_sup_view';
    protected $fillable = [
    'document_no',
    'id',
    'sup_code',
    'sup_name',
    'sup_name_2',
    'image_url',
    'address',
    'phone_no',
    'phone_no_2',
    'fax_no',
    'email',
    'contact_name',
    'contact_phone',
    'thumbnail',
    'status',
    'inactived',
    'is_deleted',
    'created_by',
    'updete_by',
    'delete_by',
    'created_at',
    'updated_at'
    ];
}
