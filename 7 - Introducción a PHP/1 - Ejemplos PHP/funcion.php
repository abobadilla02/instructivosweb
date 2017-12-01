<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Funciones básicas</title>
</head>
<body>

	<p>
		<?php 
			function saludo() {
				echo "Hola mundo";
				echo "<br>";
			}

			function nombre($nombre) {
				echo "Tu nombre es"." ".$nombre;
				echo "<br>";
			}

			print "Función sin parámetro";
			echo "<br>";
			saludo();

			print "Función con parámetro";
			echo "<br>";
			nombre("Alonso");


		 ?>

	</p>
	
</body>
</html>