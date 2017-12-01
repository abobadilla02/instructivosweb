/*"personas": [
	{
		"Nombre": "Alonso",
		"Apellido": "Bobadilla",
		"Edad": 22;
		"Telefono": "67039813",
		"Correo": "a.bobadilla02@ufromail.cl"
	},
	{
		"Nombre": "Alonso",
		"Apellido": "Bobadilla",
		"Edad": 22;
		"Telefono": "67039813",
		"Correo": "a.bobadilla02@ufromail.cl"
	},
	{
		"Nombre": "Alonso",
		"Apellido": "Bobadilla",
		"Edad": 22;
		"Telefono": "67039813",
		"Correo": "a.bobadilla02@ufromail.cl"
	}
] */

var personas = [{
	"Nombre": "Alonso",
	"Apellido": "Bobadilla",
	"Edad": 22,
	"Telefono": "67039813",
	"Correo": "a.bobadilla02@ufromail.cl"
}, {
	"Nombre": "Juan Pablo",
	"Apellido": "Tobias",
	"Edad": 21,
	"Telefono": "812832813",
	"Correo": "j.tobias01@ufromail.cl"
}, {
	"Nombre": "Rodrigo",
	"Apellido": "Tralma",
	"Edad": 21,
	"Telefono": "282883218",
	"Correo": "r.tralma01@ufromail.cl"
}, {
	"Nombre": "Alberto",
	"Apellido": "Herrera",
	"Edad": 21,
	"Telefono": "92838238",
	"Correo": "a.herrera07@ufromail.cl"
}, {
	"Nombre": "Bruno",
	"Apellido": "Gutierrez",
	"Edad": 21,
	"Telefono": "8282993",
	"Correo": "b.gutierrez05@ufromail.cl"
}, {
	"Nombre": "Jorge",
	"Apellido": "Fuentes",
	"Edad": 27,
	"Telefono": "4323455",
	"Correo": "j.fuentes07@ufromail.cl"
}];

function cargarTabla() {
	var tabla = document.getElementById("personas");
	var texto = "";
	var atributo;

	for (i = 0; i < personas.length; i++) {
		var persona = personas[i];
		texto += "<tr>";
		for (atributo in persona) {
			texto += "<th>" + persona[atributo] + "</th>";
		}
		texto += "<tr>";
	}
	tabla.innerHTML = texto;
}