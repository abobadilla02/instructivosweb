<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>validar</title>
</head>
<body>
	<?php 
		if ($_POST["user"]) == "admin" && $_POST["pass"] == "1234") {
			$_SESSION["user"] = $_POST["user"];
			$_SESSION["logged_in"] = true;
			echo "Sesión iniciada con éxito";
		} else {
			echo "Datos de sesión incorrectos!";
		}
		session_destroy​ ();
	?>
</body>
</html>