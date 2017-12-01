<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

class Noticia extends Model
{
    use SoftDeletes;

	public $table = 'Noticia';
	
	const CREATED_AT = 'created_at';
	const UPDATED_AT = 'updated_at';

	protected $dates = ['deleted_at'];

	public $fillable = [
		'titular',
		'entrada',
		'cuerpo',
		'imagen',
		'fecha',
		'categoria_id',
		'usuario_id'
	];

	/**
	 * The attributes that should be casted to native types.
	 *
	 * @var array
	 */
	protected $casts = [
		'id' => 'integer',
		'entrada' => 'string',
		'cuerpo' => 'text',
		'imagen' => 'string',
		'fecha' => 'date',
		'categoria_id' => 'integer',
		'usuario_id' => 'integer'
	];

	/**
	 * Validation rules
	 *
	 * @var array
	 */
	public static $rules = [
		
	];

	/**
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 **/
	public function categoria()
	{
		return $this->belongsTo(\App\Models\Categoria::class);
	}

	/**
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 **/
	public function usuario()
	{
		return $this->belongsTo(\App\Models\Usuario::class);
	}

	protected $hidden = ['remember_token', 'updated_at', 'created_at', 'deleted_at'];	
}
