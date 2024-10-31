import obtenerGenero from "./obtenerGenero";
import fetchGeneros from "./fetchGeneros";
const akey = "9fda5ce8a994728d67a854d8c77757a0";
/**
 * Funcion que se encarga de hacer fetch para obtener las peliculas o series populares.
 * @param {String} filtro Si queremos cargar 'peliculas' o 'series'.
 */
const fetchPopulares = async (filtro = "movie", pagina = 1) => {
	const tipo = filtro === "movie" ? "movie" : "tv";
	const url = `https://api.themoviedb.org/3/${tipo}/popular?api_key=${akey}&language=es-MX&region=US&page=${pagina}`;
	const generos = await fetchGeneros(tipo);

	try {
		const respuesta = await fetch(url);
		const datos = await respuesta.json();
		const resultados = datos.results;

		// Obtenemos el genero de cada resultado y lo agregamos al objeto de resultados.
		resultados.forEach((resultado) => {
			resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
		});

		return resultados;
	} catch (e) {
		console.log(e);
	}
};

export default fetchPopulares;
