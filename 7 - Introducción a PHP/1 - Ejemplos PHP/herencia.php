<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Ejemplo herencia</title>
</head>
<body>
	<p>
		<?php 
			class Figura {
				public $tieneLados = true;
			}

			class Cuadrado extends Figura {}

			$cuadrado = new Cuadrado();
			if (property_exists($cuadrado, "tieneLados")) {
				echo "Es un cuadrado y tiene lados";
			}
		?>	
	</p>
</body>
</html>