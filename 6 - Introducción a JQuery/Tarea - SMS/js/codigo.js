$(document).ready(function() {
	var mensaje = "";

	$("#btn-1").click(function() {
		mensaje += "";
		$("#texto").val(mensaje);
	});
	var cont = 0;
	$(".btn-tres").click(function() {
		if (cont == 3) {
			cont = 1;
		} else {
			cont++;	
		}
	});
	$("#btn-2").click(function() {
		if (cont == 1) {
			mensaje += "a";
			$("#texto").val(mensaje);
			cont = 0;
		} else 
		if (cont == 2) {
			mensaje += "b";
			$("#texto").val(mensaje);
			cont = 0;
		} else {
			mensaje += "c";
			$("#texto").val(mensaje);
			cont = 0;
		}
		

		$("#btn-2").click(function() {
			mensaje.pop();
			

			$("#btn-2").click(function() {
				mensaje.pop();
				
			});
		});
	});
	
	$("#btn-3").click(function() {
		mensaje += "d";
		$("#texto").val(mensaje);
	});
	$("#btn-4").click(function() {
		mensaje += "g";
		$("#texto").val(mensaje);
	});
	$("#btn-5").click(function() {
		mensaje += "j";
		$("#texto").val(mensaje);
	});
	$("#btn-6").click(function() {
		mensaje += "m";
		$("#texto").val(mensaje);
	});
	$("#btn-7").click(function() {
		mensaje += "o";
		$("#texto").val(mensaje);
	});
	$("#btn-8").click(function() {
		mensaje += "r";
		$("#texto").val(mensaje);
	});
	$("#btn-9").click(function() {
		mensaje += "w";
		$("#texto").val(mensaje);
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
		mensaje += "";
		$("#texto").val(mensaje);
	});
});