export const pokemonIds = [0, 2, 5, 6, 8, 11];

pokemonIds.push(4);

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}
// La diferencia con una clase es que una interfaz no se puede instanciar

export const charizard: Pokemon = {
  id: 1,
  name: "Charizard",
};

export const pikachu: Pokemon = {
  id: 0,
  name: "Pikachu",
};
console.log(pikachu);

export const pokemons: Pokemon[] = [];

pokemons.push(charizard, pikachu);
console.log(pokemons);
