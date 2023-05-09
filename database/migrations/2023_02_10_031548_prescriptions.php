<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Prescriptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prescriptions', function (Blueprint $table){
            $table->id();
            $table->integer('jusin_id')->unsigned();
            $table->integer('jusinsya_id')->unsigned();
            $table->date('publish_ymd');
            $table->string("del_flg",1)->nullable(0);  
            $table->string("status",50)->nullable();    
            $table->integer('created_user_id')->unsigned();
            $table->timestamps(); 
            $table->integer('updated_user_id')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('prescriptions'); 
    }
}