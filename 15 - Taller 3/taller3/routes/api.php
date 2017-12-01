<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['cors', 'jwt.auth']], function () {

});

Route::group(['middleware' => ['cors']], function () {
		
		//Nueva ruta para el login
		Route::post('/login', 'AuthController@userAuth');

		// Ruta de usuario
		Route::resource('user', 'UserController');

		// Ruta de categoría
		Route::resource('categoria', 'CategoriaController');

		// Ruta de noticia
		Route::resource('noticia', 'NoticiaController');
		
});	
