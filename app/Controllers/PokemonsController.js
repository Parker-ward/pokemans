import { appState } from "../AppState.js"
import { pokemonsService } from "../Services/PokemonsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawWildPokemon() {
  let template = ''
  appState.Wildpokemons.forEach(p => template += p.WildPokemonTemplate)
  setHTML('app', template)

}
export class PokemonsController {

  constructor() {
    this.getPokemons()
    appState.on('Wildpokemons', _drawWildPokemon)

  }

  async getPokemons() {
    try {
      await pokemonsService.getPokemons()

    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
    // NOTE go to serveice and get pokemon
  }
}