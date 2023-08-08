<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Animal;
use App\Models\Farm;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
//        User::factory(15)->create();
        User::factory()->create([
            'name' => 'Aaaa',
            'email' => 'aaa@aaa.com',
            'password' => '11111111'
        ]);

        User::factory()->create([
            'name' => 'Bbbb',
            'email' => 'bbb@bbb.com',
            'password' => '22222222'
        ]);

        Farm::factory(25)->create();
        Animal::factory(25)->create();

    }
}
