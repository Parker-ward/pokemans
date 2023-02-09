//@ts-ignore
export const pokemanAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 2500

})