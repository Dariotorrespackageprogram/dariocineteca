const fetchOrden = () => {
	let orden = ""; // Declara e inicializa la variable texto
	orden +=
		"El número de opciones del select: " +
		document.formul.miSelect.length +
		"\n"; // Usa "\n" para un salto de línea
	const indiceorden = document.formul.miSelect.selectedIndex;
	const vorden = document.formul.miSelect.options[indiceorden].value;
	orden += "Valor de la opción escogida: " + valor + "\n"; // Usa "\n" para un salto de línea
	const textoEscogido = document.formul.miSelect.options[indice].text;
	orden += "Texto de la opción escogida: " + textoEscogido;
	console.log(orden);
};

export default fetchOrden; // Exporta la función en lugar de llamar a la función
