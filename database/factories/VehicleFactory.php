<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $km = fake()->numberBetween(3000, 40000);
        return [
            'model' => fake()->firstNameMale(),
            'brand' => fake()->streetName(),
            'year' => fake()->year(),
            'owner' => 'Company',
            'km_driven' => $km,
            'km_last_service' => fake()->numberBetween(3000, $km),
            'fuel_type' => fake()->randomElement(['Regular', 'Premium', 'Diesel']),
            'fuel_consumption_rate' => fake()->numberBetween(1, 4)

        ];
    }
}
