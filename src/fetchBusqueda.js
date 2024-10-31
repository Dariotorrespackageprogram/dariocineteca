import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";
const akey = "9fda5ce8a994728d67a854d8c77757a0";
const fetchBusqueda = async (pagina = 1) => {
	const tipo = document.querySelector(".main__filtros .btn--active").id;
	const idGenero = document.querySelector("#filtro-generos .btn--active")
		?.dataset.id;
	let ord;
	const añoInicial = document.getElementById("años-min").value || 1950;
	const añoFinal = document.getElementById("años-max").value || 2024;
	const indiceorden = document.formul.miSelect.selectedIndex;
	const vorden = document.formul.miSelect.options[indiceorden].value;
	if (vorden === "1" && tipo === "movie") {
		ord = "popularity.desc";
	} else if (vorden === "2" && tipo === "movie") {
		ord = "primary_release_date.desc";
	} else if (vorden === "3" && tipo === "movie") {
		ord = "primary_release_date.asc";
	} else if (vorden === "4" && tipo === "movie") {
		ord = "title.asc";
	} else if (vorden === "5" && tipo === "movie") {
		ord = "title.asc";
	} else if (vorden === "1" && tipo === "tv") {
		ord = "popularity.asc";
	} else if (vorden === "2" && tipo === "tv") {
		ord = "first_air_date.desc";
	} else if (vorden === "3" && tipo === "tv") {
		ord = "first_air_date.asc";
	} else if (vorden === "4" && tipo === "tv") {
		ord = "name.desc";
	} else if (vorden === "5" && tipo === "tv") {
		ord = "name.asc";
	}
	// Verificar si ord se ha establecido antes de imprimir el mensaje
	if (ord) {
		mensaje = "el orden es " + ord + " el tipo es " + tipo;
		console.log(mensaje);
	}
	let url;
	if (tipo === "movie") {
		url = `https://api.themoviedb.org/3/discover/movie?api_key=${akey}&language=es-MX&sort_by=${ord}&include_adult=false&page=1&with_genres=${idGenero}&primary_release_date.gte=${añoInicial}-01-01&primary_release_date.lte=${añoFinal}-12-31&region=US&page=${pagina}`;
	} else if (tipo === "tv") {
		url = `https://api.themoviedb.org/3/discover/tv?api_key=${akey}&language=es-MX&sort_by=${ord}&include_adult=false&page=1&with_genres=${idGenero}&first_air_date.gte=${añoInicial}-01-01&first_air_date.lte=${añoFinal}-12-31&region=US&page=${pagina}`;
	}

	let generos;
	generos = await fetchGeneros(tipo);

	try {
		const respuesta = await fetch(url);
		const data = await respuesta.json();

		let resultados = data.results;

		// Obtenemos el genero de cada resultado y lo agregamos al objeto de resultados.
		resultados.forEach((resultado) => {
			resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
		});

		return resultados;
	} catch (e) {
		console.log(e);
	}
};

export default fetchBusqueda;
