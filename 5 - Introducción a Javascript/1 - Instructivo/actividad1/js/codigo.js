// Obtener y almacenar boton
var btn = document.getElementById("btn");

// Obtener div resultados y almacenarlo
var div = document.getElementById("resultado");

// Obtener imputs y almacenarlos
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

// Añadir evento click a la variable btn
btn.addEventListener("click", function() {
	//Obtener y crear variables para los inputs
	var min = inputUno.value;
	var max = inputDos.value;

	if (parseInt(min) < parseInt(max) && parseInt(min) != parseInt(max)) {
		// Llamar función para sumar y mostrar resultado
		resultado.innerHTML = random(min,max);	
	} else {
		alert("Ingrese valores válidos");
	}
});

// Función para mostrar un número al azar entre los dos números
function random(min, max) {
	// Transformar a int y sumar
	return Math.floor((Math.random() * (parseInt(max) - parseInt(min) + 1)))+ parseInt(min);
}