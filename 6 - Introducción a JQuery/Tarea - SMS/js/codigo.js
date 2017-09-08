$(document).ready(function() {

	var mensaje = "";
	var tiempo;
	var m;
	var mayus = false;
	// Botón para borrar, adaptar despues
	$("#btn-borrar").click(function() {
		borrarLetra();
	});

	$("#btn-2").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn-2").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'a') {
			if (mensaje != "") {
				m = mensaje.slice(0, -1);
				mensaje = m;
			}
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-2").val('b');
		} else if (letra.toLowerCase() == 'b') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-2").val('c');
		} else if (letra.toLowerCase() == 'c') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-2").val('a');
		}

		tiempo = setTimeout(function() {
			mensaje = mensaje + " ";
			$("#texto").val(mensaje);
			$("#btn-2").val('a');
		}, 600);
	});

	$("#btn-3").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn-3").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'd') {
			if (mensaje != "") {
				m = mensaje.slice(0, -1);
				mensaje = m;
			}
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-3").val('e');
		} else if (letra.toLowerCase() == 'e') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-3").val('f');
		} else if (letra.toLowerCase() == 'f') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-3").val('d');
		}

		tiempo = setTimeout(function() {
			mensaje = mensaje + " ";
			$("#texto").val(mensaje);
			$("#btn-3").val('d');
		}, 600);
	});

	$("#btn-4").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn-4").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'g') {
			if (mensaje != "") {
				m = mensaje.slice(0, -1);
				mensaje = m;
			}
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-4").val('h');
		} else if (letra.toLowerCase() == 'h') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-4").val('i');
		} else if (letra.toLowerCase() == 'i') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-4").val('g');
		}

		tiempo = setTimeout(function() {
			mensaje = mensaje + " ";
			$("#texto").val(mensaje);
			$("#btn-4").val('g');
		}, 600);
	});

	$("#btn-5").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn-5").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'j') {
			if (mensaje != "") {
				m = mensaje.slice(0, -1);
				mensaje = m;
			}
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-5").val('k');
		} else if (letra.toLowerCase() == 'k') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-5").val('l');
		} else if (letra.toLowerCase() == 'l') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-5").val('j');
		}

		tiempo = setTimeout(function() {
			mensaje = mensaje + " ";
			$("#texto").val(mensaje);
			$("#btn-5").val('j');
		}, 600);
	});

	$("#btn-6").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn-6").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'm') {
			if (mensaje != "") {
				m = mensaje.slice(0, -1);
				mensaje = m;
			}
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-6").val('n');
		} else if (letra.toLowerCase() == 'n') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-6").val('ñ');
		} else if (letra.toLowerCase() == 'ñ') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-6").val('m');
		}

		tiempo = setTimeout(function() {
			mensaje = mensaje + " ";
			$("#texto").val(mensaje);
			$("#btn-6").val('m');
		}, 600);
	});

	$("#btn-7").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn-7").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'o') {
			if (mensaje != "") {
				m = mensaje.slice(0, -1);
				mensaje = m;
			}
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-7").val('p');
		} else if (letra.toLowerCase() == 'p') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-7").val('q');
		} else if (letra.toLowerCase() == 'q') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-7").val('o');
		}

		tiempo = setTimeout(function() {
			mensaje = mensaje + " ";
			$("#texto").val(mensaje);
			$("#btn-7").val('o');
		}, 600);
	});

	$("#btn-8").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn-8").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'r') {
			if (mensaje != "") {
				m = mensaje.slice(0, -1);
				mensaje = m;
			}
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-8").val('s');
		} else if (letra.toLowerCase() == 's') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-8").val('t');
		} else if (letra.toLowerCase() == 't') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-8").val('r');
		}

		tiempo = setTimeout(function() {
			mensaje = mensaje + " ";
			$("#texto").val(mensaje);
			$("#btn-8").val('r');
		}, 600);
	});

	$("#btn-9").click(function() {
		clearTimeout(tiempo);
		var letra = $("#btn-9").val();

		if (mayus) {
			letra = letra.toUpperCase();
		}

		if (letra.toLowerCase() == 'w') {
			if (mensaje != "") {
				m = mensaje.slice(0, -1);
				mensaje = m;
			}
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-9").val('x');
		} else if (letra.toLowerCase() == 'x') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-9").val('y');
		} else if (letra.toLowerCase() == 'y') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-9").val('z');
		} else if (letra.toLowerCase() == 'z') {
			m = mensaje.slice(0, -1);
			mensaje = m;
			mensaje += letra;
			$("#texto").val(mensaje);
			$("#btn-9").val('w');
		}

		tiempo = setTimeout(function() {
			mensaje = mensaje + " ";
			$("#texto").val(mensaje);
			$("#btn-9").val('w');
		}, 600);
	});


	$("#btn-esp-1").click(function() {
		mensaje += "";
		$("#texto").val(mensaje);
	});
	$("#btn-esp-2").click(function() {
		mensaje += " ";
		$("#texto").val(mensaje);
	});
	$("#btn-esp-3").click(function() {
		if (mayus) {
			mayus = false;
		} else {
			mayus = true;
		}
	});

	function borrarLetra() {
		var m = mensaje.slice(0, -2);
		mensaje = m;
		$("#texto").val(mensaje);
	}
});