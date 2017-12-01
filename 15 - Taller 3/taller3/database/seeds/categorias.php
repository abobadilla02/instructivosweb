<?php

use Illuminate\Database\Seeder;

class categorias extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Categoria')->insert([
        	'descripcion' => 'Política',
        ]);
        DB::table('Categoria')->insert([
        	'descripcion' => 'Salud',
        ]);
        DB::table('Categoria')->insert([
        	'descripcion' => 'Deportes',
        ]);
        DB::table('Categoria')->insert([
        	'descripcion' => 'Internacional',
        ]);
    }
}
