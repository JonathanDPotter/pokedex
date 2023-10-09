import Response from "../interfaces/PokemonResponse.interface";

const getAllPokemon = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );

    const data = (await response.json()) as Response;

    return data.pokemon;
  } catch (error: any) {
    throw new Error(error);
  }
};

const api = { getAllPokemon };

export default api;
