<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PrescriptionView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
        CREATE VIEW prescription_view AS (
          SELECT jusins.jusin_ymd,jusinsyas.simei_s,jusinsyas.simei_m,jusinsyas.simei_roma_s,jusinsyas.simei_roma_m,prescriptions.* FROM prescriptions 
            INNER JOIN jusins on prescriptions.jusin_id = jusins.id
            INNER JOIN jusinsyas on jusins.jusinsya_id = jusinsyas.id
            WHERE prescriptions.del_flg = '0'
            ORDER BY prescriptions.id DESC
         )
      ");
    } 

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       DB::statement('DROP VIEW IF EXISTS prescription_view');
    }
}