import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";
import { HttpAdapter, PokeApiAdapter } from "../api/pokeApi.adapter";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }
  // Las dependencias se inyecta en el constructor
  constructor(
    public readonly id: number,
    public name: string, // Todo: inyectar dependencias
    private readonly http: HttpAdapter // El principio de sustitucion de liskov nos dice que podemos reemplazar en la clase padre el comportamiento de una clase hija sin modificar la clase base
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    console.log(data.moves[0].move.name);

    return data.moves;
  }
}
const pokeApi = new PokeApiAdapter();
//const pokeApi = new PokeApiFetchAdapter();
// En este caso no deberia ser posible que nuestra clase padre este amarrada a una clase secundaria.
// Solo necesitamos la funcionalidad de realizar peticiones. Deberiamos poder
// incluir cualquier clase que se encargue de hacer dicha tarea
export const charmander = new Pokemon(4, "Charmander", pokeApi);

charmander.getMoves();
