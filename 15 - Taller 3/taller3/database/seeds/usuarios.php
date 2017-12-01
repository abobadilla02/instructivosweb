<?php

use Illuminate\Database\Seeder;

class usuarios extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('Usuario')->insert([
        	'nombre'=>'Alonso',
        	'email'=>'a.bobadilla02@ufromail.cl',
        	'password' => bcrypt('1234'),
        ]);
    
        DB::table('Usuario')->insert([
        	'nombre'=>'Invitado',
        	'email'=>'invitado@invitado.com',
        	'password' => bcrypt('invitado'),
        ]);

        DB::table('Usuario')->insert([
        	'nombre'=>'Lector',
        	'email'=>'lector@lector.cl',
        	'password' => bcrypt('lector'),
        ]);
    }
}
