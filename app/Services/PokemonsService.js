import { appState } from "../AppState.js";
import { WildPokemon } from "../Models/WildPokemon.js";
import { pokemanAPI } from "./AxiosService.js";

class PokemonsService {
  async getPokemons() {
    const res = await pokemanAPI.get('/pokemon/')
    console.log('got pokemons', res.data);
    appState.Wildpokemons = res.data.results.map(pokemons => new WildPokemon(pokemons))

  }




}

export const pokemonsService = new PokemonsService()