<?php 
	require('connection.php');
	$db = new ConnectionDB();

	$rut = $db->escape_string($_POST['rut']);
  
	// Enviar instrucción SQL para eliminar registro
	if ($db->query("DELETE FROM contacto WHERE rut = '$rut';")) {
		header('Content-Type: application/json');
  	echo json_encode(array('exito'=>true, 'rut'=>$rut));
	} else {
		die("Ocurrio un error al eliminar el registro. Error [ ".$db->error." ]");
	}
?>