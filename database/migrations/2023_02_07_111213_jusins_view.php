<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class JusinsView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      
        DB::statement("
        CREATE VIEW jusins_view AS (
        SELECT
        jusins.id as jusins_id,
        jusinsyas.*, jusins.jusin_kbn,
        jusins.jusin_ymd,
        jusins.status
        FROM
            jusins
        INNER JOIN jusinsyas ON jusins.jusinsya_id = jusinsyas. ID
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
        DB::statement('DROP VIEW IF EXISTS jusins_view');
    }
}