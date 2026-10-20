export default async function buscarPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status} (${response.statusText})`);
  }

  const data = await response.json();

  const pokemons = data.results.map((pokemon) => ({
    id: Number(pokemon.url.split("/")[6]),
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`,
  }));

  return pokemons;
}
