import cargarTitulos from "./cargarTitulos";
import fetchBusqueda from "./fetchBusqueda";
import fetchPopulares from "./fetchPopulares";

const btn = document.getElementById("btn-buscar");

btn.addEventListener("click", async (e) => {
	const idGenero = document.querySelector("#filtro-generos .btn--active")
		?.dataset.id;
	const popu = document.getElementById("popu");
	//condicional rebote si esta vacia
	if (idGenero === undefined && !popu.classList.contains("btn--active")) {
		alert("no  seleccionaste un genero burrote");
		return;
	} else if (popu.classList.contains("btn--active")) {
		const cargap = async () => {
			// Obtenemos los resultados.
			const resultados = await fetchPopulares("movie");

			if (resultados) {
				// Los cargamos en el DOM.
				cargarTitulos(resultados);
			}
		};

		cargap();
		return;
	} else {
		e.preventDefault();
		const resultados = await fetchBusqueda();
		cargarTitulos(resultados);
	}
});
