<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Ejemplo de clases y métodos</title>
</head>
<body>
	<p>
		<?php 
			class Persona {
				public $viva = true;

				function __construct($nombre) {
					$this->nombre = $nombre;
				}

				public function saltar() {
					return "Estoy saltando";
				}
			}

			$yo = new Persona("Alonso");
			if (is_a($yo, "Persona")) {
				echo "Soy una persona, ";
			}
			if (property_exists($yo, "nombre")) {
				echo "tengo un nombre, ";
			}
			if (method_exists($yo, "saltar")) {
				echo "y se saltar!";
			}
		?>
	</p>
</body>
</html>