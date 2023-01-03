<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Budi Budiman',
            'email' => 'admin@example.com',
            'role' => 'Admin',
            'ssn' => '01001',
            'password' => Hash::make('admin123')
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Jajang Suprapto',
            'email' => 'jajang@example.com',
            'role' => 'Supervisor',
            'ssn' => '02001',
            'password' => Hash::make('supervisor')
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Asep Sarijan',
            'email' => 'asep@example.com',
            'role' => 'Supervisor',
            'ssn' => '02002',
            'password' => Hash::make('supervisor')
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Bambang Suaco',
            'email' => 'bambang@example.com',
            'role' => 'Supervisor',
            'ssn' => '02003',
            'password' => Hash::make('supervisor')
        ]);

        \App\Models\Vehicle::factory()->create([
            'model' => 'Innova',
            'brand' => 'Toyota',
            'owner' => 'Company',
        ]);

        \App\Models\Vehicle::factory()->create([
            'model' => 'HRV',
            'brand' => 'Honda',
            'owner' => 'Company',
        ]);

        \App\Models\Vehicle::factory()->create([
            'model' => 'Camry',
            'brand' => 'Toyota',
            'owner' => 'Company',
        ]);

        \App\Models\Vehicle::factory()->create([
            'model' => 'Serena',
            'brand' => 'Nissan',
            'owner' => 'Company',
        ]);

        \App\Models\Vehicle::factory()->create([
            'model' => 'Livina',
            'brand' => 'Nissan',
            'owner' => 'Company',
        ]);

        \App\Models\Vehicle::factory()->create([
            'model' => 'Civic',
            'brand' => 'Honda',
            'owner' => 'Company',
        ]);

        \App\Models\Vehicle::factory()->create([
            'model' => 'Avanza',
            'brand' => 'Toyota',
            'owner' => 'Company',
        ]);
        
        \App\Models\RequestLog::factory(20)->create();
        
    }
}
