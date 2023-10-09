import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Pokemon } from "../interfaces/PokemonResponse.interface";
import api from "../api";

interface PokemonContext {
  pokemonList: Pokemon[];
  setPokemonList: Dispatch<SetStateAction<Pokemon[]>>;
}

const PokemonContext = createContext<PokemonContext>({
  pokemonList: [],
  setPokemonList: () => [],
});

const PokemonProvider = (props: any) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const value = { pokemonList, setPokemonList };

  return <PokemonContext.Provider {...{ value }} {...props} />;
};

export const usePokemon = () => useContext(PokemonContext);

export default PokemonProvider;
