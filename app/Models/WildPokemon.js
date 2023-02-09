export class WildPokemon {
  constructor(data) {

    this.name = data.name
    this.url = data.url

  }

  get WildPokemonTemplate() {
    return `
    <div class="card" style="width: 18rem;">
            <div class="card-body text-center">
              <h5>${this.name}</h5>
              <div
            <button onclick= ""class="btn btn-primary">Pokemon Dets</div>
            </div>
          </div>
    `
  }
}