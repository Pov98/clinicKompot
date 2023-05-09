<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Users extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('user_code',20)->nullable();
            $table->integer('kikan_id')->unsigned();
            $table->integer('group_id')->unsigned();
            $table->string('user_name',50)->nullable();
            $table->string('user_kana',50)->nullable();
            $table->string('ryaku',8)->nullable();
            $table->string('syoku',3)->nullable();
            $table->integer('sort_no')->unsigned();
            $table->string('jokin',1)->nullable();
            $table->string('katudo',1)->nullable();
            $table->date('work_start_date');
            $table->date('work_end_date');
            $table->string('syozok_kbn')->nullable();
            $table->string('tel',15)->nullable();
            $table->string('zip',8)->nullable();
            $table->string('address',100)->nullable();
            $table->date('birthday');
            $table->string('sex',1)->nullable();
            $table->string('del_flg',1)->nullable();
            $table->integer('created_user_id')->unsigned();
            $table->integer('updated_user_id')->unsigned();
            $table->string('code1',255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
