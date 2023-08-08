<?php

namespace Database\Factories;

use App\Models\Farm;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Animal>
 */
class AnimalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'number' => $this->faker->randomDigitNotNull,
            'name' => $this->faker->sentence,
            'age'   => $this->faker->numberBetween(1, 20),
            'farm_id' => Farm::all()->random()->id,
        ];
    }
}
