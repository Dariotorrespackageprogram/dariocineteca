//cargamos los generos a la plataforma desde el arreglo
import fetchGeneros from "./fetchGeneros";

const contenedorGeneros = document.getElementById("filtro-generos");

const cargarGeneros = async (filtro) => {
	//contenedorGeneros.innerHTML = ""; lo movemos afuera

	//aqui vamos a agregar la opcion populares
	contenedorGeneros.innerHTML = "";
	//
	const btnp = document.createElement("button");
	btnp.id = "popu";
	btnp.classList.add("btn");
	btnp.innerText = "populares";
	contenedorGeneros.appendChild(btnp);

	const generos = await fetchGeneros(filtro);
	generos.forEach((genero) => {
		const btn = document.createElement("button");
		btn.classList.add("btn");
		btn.innerText = genero.name;
		btn.setAttribute("data-id", genero.id);
		contenedorGeneros.appendChild(btn);
	});
};

export default cargarGeneros;
