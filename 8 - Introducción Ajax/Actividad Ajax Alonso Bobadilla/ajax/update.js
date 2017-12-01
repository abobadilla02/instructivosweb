/*$(document).on("click", "#actualizar", function(event) {
	event.preventDefault();

	var rut =$(this).attr('value');
	console.log(rut);
	
 });

$('#form-actualizar').submit(function(event) {
	event.preventDefault();

	$.post('../server/update.php',
		$('#form-actualizar').serialize(),
		function(dato) {
			$("#actualizar").modal('hide');
			if (dato.exito) {
				var variable = "";
				if (dato.cargo == 12) variable = "Jefe Proyecto";
				if (dato.cargo == 23) variable = "Analista";
				if (dato.cargo == 32) variable = "Desarrollador";


				$('#fila_' + dato.rut).after(
					'<td>' + dato.rut + '</td>' +
					'<td>' + dato.nombre + '</td>' +
					'<td>' + dato.email + '</td>' +
					'<td>' + dato.telefono + '</td>' +
					'<td>' + variable + '</td>' +
					'<td> <button value=\'' + dato.rut + '\' type="button" class="btn btn-info" data-toggle="modal" href="#actualizar">Actualizar</button> - <a id="eliminar" class="btn btn-danger" data-toggle="modal" href="#modal_eliminar">Eliminar</a></td>' +
					'</tr>'
				);
			} else {
				alert('Error al recibir la respuesta del Servidor');
			}
		});
}); */

$(document).ready(function() {

	$(document).on("click", "button[name='actualizar']", function(event) {
		event.preventDefault();

		var rut = $(this).attr('value');

		$.get('../server/read.php', function(data) {
			if (data.exito) {
				for (var i = 0; i < data.datos.length; i++) {
					if (data.datos[i].rut == rut) {
						var variable = null;

						$("input[name='rutActualizado']").val(data.datos[i].rut);
						$("input[name='nombreActualizado']").val(data.datos[i].nombre);
						$("input[name='emailActualizado']").val(data.datos[i].email);
						$("input[name='telefonoActualizado']").val(data.datos[i].telefono);

						if (data.datos[i].cargo == "Jefe Proyecto") {
							variable = "12";
						}
						if (data.datos[i].cargo == "Analista") {
							variable = "23";
						}
						if (data.datos[i].cargo == "Desarrollador") {
							variable = "32";
						}

						$("select[name='cargoActualizado']").val(variable);
						break;
					}
				}
			}
		});
	});

	$('#form-actualizar').submit(function(event) {
		event.preventDefault();
		$.post('../server/update.php',
			$('#form-actualizar').serialize(),
			function(data) {
				if (data.exito) {
					location.reload(true);
				} else {
					alert('Error al recibir respuesta del servidor');
				}
			});
	});
});