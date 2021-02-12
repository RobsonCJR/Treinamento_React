import React from "react";

const PokemonRow = ({ pokemon }) => {
	return (
		<tr>
      <td>{pokemon.name}</td>
      <td>
        <a href={pokemon.url}>Ver detalhes</a>
      </td>
		</tr>
		);
};

const PokemonsTable = ({ pokemons }) => {
	return (
		<div>
		  <table>
		    <thead>
		        <tr>
		          <th>Pokemon</th>
		          <th>Detalhes</th>
		        </tr>
		      </thead>
		    <tbody>
		      {pokemons ?.map((pokemon) => (
			      <PokemonRow pokemon={pokemon} key={pokemon.name} />
			    ))}
		    </tbody>
		  </table>
		</div>
		);
	};

export default PokemonsTable;