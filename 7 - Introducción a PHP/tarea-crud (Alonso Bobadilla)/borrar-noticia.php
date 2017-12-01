<?php 
include 'db.php';
session_start();

if(!isset($_SESSION['usuario'])) {
	header('Location: ./');
	die;
}

// IMPLEMENTAR BORRAR AQUÍ
$idNoticia = $_GET['id'];
$result = $db->query("DELETE FROM noticias WHERE id_noticia=$idNoticia");
//$_SESSION["error"] = "Función no implementada";
header("Location: welcome.php");
