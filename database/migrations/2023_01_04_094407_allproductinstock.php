<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AllProductinstock extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
        CREATE  VIEW allproductinstock AS (
            SELECT
            P .product_no,
            P .description,
            P .stock_unit_of_measure_code,
            P .reorder_point,
            P .unit_price,
         COALESCE (
                SUM (
                    TO_NUMBER(pu.inventory, '999999999')
                ),
                0
            ) AS inventorys
        FROM
            product P
        LEFT OUTER JOIN product_stock_keeping_units pu ON P .product_no = pu.product_no
        GROUP BY
            P .product_no,
            P .product_barcode,
            P .description,
            P .stock_unit_of_measure_code,
            P .reorder_point,
            P .unit_price 
        )"
      );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS allproductinstock');
    }
}
