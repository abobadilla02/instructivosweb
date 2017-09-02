// Obtener el div mediante la id caja, y se almacena en una variable del mismo nombre
var caja = document.getElementById("caja");

// Se obtiene el span y se almacena en la variable texto
var texto = document.getElementById("texto");

// Se añade el evento click a la variable caja
caja.addEventListener("click", function() {
	// Cambiar el texto almacenado en la variable texto
	texto.innerHTML = "Texto cambiado al dar click";
	// Cambiar el color del div almacenado
	caja.style.background = "red";
});
