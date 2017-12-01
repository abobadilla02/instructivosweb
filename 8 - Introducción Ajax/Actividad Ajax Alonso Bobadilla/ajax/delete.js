$(document).on("click", "#eliminar", function(event) {
	event.preventDefault();
	var rut = $(this).closest('tr').attr('id').split('_');
	$('#form-eliminar').append('<input type="hidden" name="rut" value="' + rut[1] + '">');
});

$('#form-eliminar').submit(function(event) {
	event.preventDefault();

	$.post('../server/delete.php',
		$('#form-eliminar').serialize(),
		function(dato) {
			$("#modal_eliminar").modal('hide');
			if (dato.exito) {
				console.log(dato);
				$('#fila_' + dato.rut).html("");
			} else {
				alert('Error al recibir la respuesta del Servidor');
			}
		});
});