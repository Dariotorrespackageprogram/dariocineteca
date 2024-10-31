const akey = "9fda5ce8a994728d67a854d8c77757a0";
const fetchGeneros = async (filtro = "movie") => {
	const tipo = filtro === "movie" ? "movie" : "tv";
	const url = `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=${akey}&language=es-MX`;

	try {
		const resultados = await fetch(url);
		const datos = await resultados.json();
		return datos.genres;
	} catch (e) {
		console.log(e);
	}
};

export default fetchGeneros;
