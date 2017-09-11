<?php 

$usuario = $_POST["user"];
$apellido = $_POST["lastname"];
$edad = $_POST["age"];

$array = array("alonso", "homero", "bart");
$resultado = "No se ha encontrado en la lista\n\t";
$cont = 0;

for ($i=0; $i < count($array); $i++) { 
	if ($usuario == $array[$i]) {
		$resultado = "Si se encuentra en la lista\n\t";
		break;
	}
}

if ($usuario == "" || $apellido == "" || $edad == "") {
	$cont = $cont + 1;
	echo "Hay campos vacios\n\t";
}

$permitidos = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
for ($i=0; $i<strlen($usuario); $i++){
  	if (strpos($permitidos, substr($usuario,$i,1))===false) {
    	$cont = $cont + 1;
    	echo "El nombre solo puede contener letras\n\t";
    	break;
  	}
}

for ($i=0; $i<strlen($apellido); $i++){
  	if (strpos($permitidos, substr($apellido,$i,1))===false) {
  		$cont = $cont + 1;
    	echo "El apellido solo puede contener letras\n\t";
    	break;
  	}
}

$permitidos = "0123456789";
for ($i=0; $i<strlen($edad); $i++){
  	if (strpos($permitidos, substr($edad,$i,1))===false) {
    	$cont = $cont + 1;
    	echo "La edad solo puede contener números\n\t";
    	break;
  	}
}

if ($cont == 0) {
	echo $resultado;	
}
?>