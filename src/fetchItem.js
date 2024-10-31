const akey = "9fda5ce8a994728d67a854d8c77757a0";
const fetchItem = async (id) => {
	const tipo = document.querySelector(".main__filtros .btn--active").id;
	console.log(tipo.charAt);

	try {
		const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=${akey}&language=es-MX`;
		const respuesta = await fetch(url);
		const datos = await respuesta.json();

		return datos;
	} catch (e) {
		console.log(e);
	}
};

export default fetchItem;
