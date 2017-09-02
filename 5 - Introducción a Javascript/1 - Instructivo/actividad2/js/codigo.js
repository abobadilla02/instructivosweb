// Obtener y almacenar boton
var btnSuma = document.getElementById("btn-suma");
var btnResta = document.getElementById("btn-resta");
var btnMulti = document.getElementById("btn-multi");
var btnDivi = document.getElementById("btn-divi");

// Obtener div resultados y almacenarlo
var div = document.getElementById("resultado");

// Obtener imputs y almacenarlos
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

// Añadir evento click a la variable btnSuma
btnSuma.addEventListener("click", function() {
	//Obtener y crear variables para los inputs
	var n1 = inputUno.value;
	var n2 = inputDos.value;

	if ( n1 != '' && n2 != '') {
		// Llamar función para sumar y mostrar resultado
		resultado.style.color = "black";
		resultado.innerHTML = suma(n1, n2);
	} else {
		resultado.style.color = "red";
		resultado.innerHTML = "Ingrese los dos valores, por favor";
	}
});

// Añadir evento click a la variable btnResta
btnResta.addEventListener("click", function() {
	//Obtener y crear variables para los inputs
	var n1 = inputUno.value;
	var n2 = inputDos.value;

	if ( n1 != '' && n2 != '') {
		//Llamar a la función resta y mostrar resultado
		resultado.style.color = "black";
		resultado.innerHTML = resta(n1, n2);
	} else {
		resultado.style.color = "red";
		resultado.innerHTML = "Ingrese los dos valores, por favor";
	}
	
});

// Añadir evento click a la variable btnMulti
btnMulti.addEventListener("click", function() {
	//Obtener y crear variables para los inputs
	var n1 = inputUno.value;
	var n2 = inputDos.value;

	if ( n1 != '' && n2 != '') {
		// Llamar función para sumar y mostrar resultado
		resultado.style.color = "black";
		resultado.innerHTML = multiplicacion(n1, n2);
	} else {
		resultado.style.color = "red";
		resultado.innerHTML = "Ingrese los dos valores, por favor";
	}
});

// Añadir evento click a la variable btnDivi
btnDivi.addEventListener("click", function() {
	//Obtener y crear variables para los inputs
	var n1 = inputUno.value;
	var n2 = inputDos.value;

	if ( n1 != '' && n2 != '') {
		if (n2 != 0) {
			resultado.style.color = "black";
			resultado.innerHTML = division(n1, n2);
		} else {
			resultado.style.color = "red";
			resultado.innerHTML = "No es posible dividir por cero";
		}
	} else {
		resultado.style.color = "red";
		resultado.innerHTML = "Ingrese los dos valores, por favor";
	}

});

// Función para sumar dos números
function suma(n1, n2) {
	// Transformar a int y sumar
	return parseInt(n1) + parseInt(n2);
}

// Función para restar dos números
function resta(n1, n2) {
	//Transformar a int y restar
	return parseInt(n1) - parseInt(n2);
}

// Función para multiplicar dos números
function multiplicacion(n1, n2) {
	//Transformar a int y multiplicar
	return parseInt(n1) * parseInt(n2);
}

// Función para dividir dos números
function division(n1, n2) {
	//Trasformar a int y dividir;
	return parseInt(n1) / parseInt(n2);
}

function enteros(e) {
	key = e.keyCode || e.which;
	tecla = String.fromCharCode(key).toLowerCase();
	numeros= "0123456789";
	if(numeros.indexOf(tecla) == -1) {
        return false;
	}
}