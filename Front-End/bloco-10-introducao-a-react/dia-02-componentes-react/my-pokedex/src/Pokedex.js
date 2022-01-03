import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <main className="main">
        {pokemons.map((pokemon) => {
          return <Pokemon
            key={pokemon.name}
            name={pokemon.name}
            type={pokemon.type}
            value={pokemon.averageWeight.value}
            measurementUnit={pokemon.averageWeight.measurementUnit}
            image={pokemon.image}
          />
        })}
      </main>
    );
  }
}

export default Pokedex;