<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
</head>
<body>
	<form action="validar.php" method="post">
		<label>Usuario:<input type="text" name="usuario"></label><br>
		<label>Contraseña:<input type="text" name="usuario"></label><br>
		<label><input type="submit" value="Enviar"></label>
	</form>
</body>
</html>