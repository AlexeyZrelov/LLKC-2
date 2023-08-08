<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Farm>
 */
class FarmFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'farm_name' => $this->faker->name,
            'email' => $this->faker->unique()->email,
            'website'   => $this->faker->freeEmailDomain,
            'user_id' => User::all()->random()->id,
        ];
    }
}
