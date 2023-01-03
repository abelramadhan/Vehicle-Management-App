<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('vehicle_id');
            $table->foreign('vehicle_id')->references('id')->on('vehicles');
            $table->string('borrower_name');
            $table->string('borrower_ssn')->unique();
            $table->timestamp('request_date');
            $table->string('supervisor_1');
            $table->string('supervisor_2');
            $table->foreign('supervisor_1')->references('ssn')->on('users');
            $table->foreign('supervisor_2')->references('ssn')->on('users');
            $table->boolean('approval_1')->default(false);
            $table->boolean('approval_2')->default(false);
            $table->integer('duration_days');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('requests');
    }
};
