<?php 
  require('connection.php');
  $db= new ConnectionDB();
  
  $rut=$db->escape_string($_POST['rutActualizado']);
  $nombre=$db->escape_string($_POST['nombreActualizado']);
  $email=$db->escape_string($_POST['emailActualizado']);
  $telefono=$db->escape_string($_POST['telefonoActualizado']);
  $cargo=$db->escape_string($_POST['cargoActualizado']);
  if($db->query("UPDATE contacto SET nombre='$nombre', email='$email', telefono='$telefono', 
    cod_cargo='$cargo' WHERE rut='$rut';")){
    
    header('Content-Type: application/json');
    echo json_encode(array('exito'=>true));
  }else{
    echo ("Existe un error al realizar la consulta [". $db->error."]");
  }
?>