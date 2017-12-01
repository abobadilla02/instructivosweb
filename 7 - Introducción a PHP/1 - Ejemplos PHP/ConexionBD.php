<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Conexión a base de datos</title>
</head>
<body>
	<?php
		// Conectando, seleccionando la base de datos
		$dbHost = "localhost";
		$dbUser = "root";
		$dbPass = "";
		$dbName = "tutorialphp";
		// Inicializar conexión
		$link = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

		// Verificar conexión exitosa
		if ($link->connect_error) {
			die("Error de conexión: " . $link->connect_error);
		}

		// Consulta a mysql
		$query = "SELECT * FROM saludos";
		$result = $link->query($query);

		if (!result) {
			echo "Error al ejecutar consulta en la base de datos" . $link->error;
		} else {
			echo "<table>\n";
			while ($line = $result->fetch_assoc()) {
				echo "\t<tr>\n";
				echo "\t\t<td>{$line['id']}</td><td>{$line['contenido']}</td>\n";
				echo "\t</tr>\n";
			}
			echo "</table>\n";
		}

		// Cerrar conexión
		$link->close();
	?>
</body>
</html>