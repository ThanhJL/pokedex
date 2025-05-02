
import { useState, useEffect } from 'react'
import './App.css'

function App() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() =>{
      fetchPokemons();
    }, [] )

    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151");
        const data = await response.json();
        setPokemons(data)
      } catch (error) {
        console.log(error);
      }
    }

    
  return (
    <>
      <h1> Pokedex </h1>

      <div className="grid">
        {pokemons.map(pokemon =>(
          <div key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>Statistiques</h3>
            <ul>
              <li>Points de vie : {pokemon.stats.HP}</li>
              <li>Attaque : {pokemon.stats.attack}</li>
              <li>Défense : {pokemon.stats.defense}</li>
            </ul>
            <div class="types">
              {pokemon.apiTypes.map(type => (
                <div className="type">
                  <img src={type.image} alt={type.name} />
                  <h4>{type.name}</h4>
                </div>
              ))}
            </div>
          </div>
        )) }

      </div>
    </>
  )
}

export default App
