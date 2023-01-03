<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RequestLog>
 */
class RequestLogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $km = fake()->numberBetween(3000, 40000);
        $date = Carbon::createFromTimestamp(fake()->dateTimeBetween('-6 months', '-10 days')->getTimestamp());
        return [
            'borrower_name' => fake()->name(),
            'borrower_ssn' => fake()->numerify('#####'),
            'vehicle_id' => fake()->numberBetween(1, 7),
            'km_before' => $km,
            'km_after' => $km+(fake()->numberBetween(100, 1000)),
            'date_given'=> $date,
            'date_returned' => Carbon::createFromFormat('Y-m-d H:i:s', $date)->addDays(fake()->numberBetween(2, 5)),
        ];
    }
}
