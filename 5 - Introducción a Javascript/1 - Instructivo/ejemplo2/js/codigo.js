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
	var n1 = inputUno.value;
	var n2 = inputDos.value;

	// Llamar función para sumar y mostrar resultado
	resultado.innerHTML = suma(n1,n2);
});

// Función para sumar dos números
function suma(n1, n2) {
	// Transformar a int y sumar
	return parseInt(n1) + parseInt(n2);
}