import React, { useState, useEffect } from "react";
import { PokemonsTable } from "../../components";
import api from "../../services/api";

const Pokedex = () => {
	const [pokemons, setPokemons] = useState([]);

	const getFilms = async () => {
		const response = await api.get("/pokemon?limit=151");
		setPokemons(response.data.results);
	};

	useEffect(() => {
		getFilms();
  },[]);

	return (
		<>
		  <h1>Pokemons da primeira geração</h1>
			<PokemonsTable pokemons={pokemons} />
   </>
   );
 };

 export default Pokedex;