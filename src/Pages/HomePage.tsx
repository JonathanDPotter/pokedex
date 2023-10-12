import { usePokemon } from "../context/pokemon.context";
import { PokemonCard, PokemonListItem } from "../components";
import {
  Input,
  Select,
  Option,
  Button,
  Radio,
  List,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Pokemon, Type } from "../interfaces/PokemonResponse.interface";
import api from "../api";
import { View, useViewAs } from "../context/viewAs.context";

const HomePage = () => {
  const [filteredList, setFilteredList] = useState<Pokemon[]>([]);
  const [text, setText] = useState("");
  const [type, setType] = useState<Type>(Type.Any);
  const [weakness, setWeakness] = useState<Type>(Type.Any);

  const { pokemonList, setPokemonList } = usePokemon();
  const { viewAs, setViewAs } = useViewAs();

  const clearForm = () => {
    setText("");
    setType(Type.Any);
    setWeakness(Type.Any);
  };

  useEffect(() => {
    (async () => {
      const returnedList = await api.getAllPokemon();
      setPokemonList(returnedList);
      setFilteredList(returnedList);
    })();
  }, []);

  useEffect(() => {
    let newList = [...pokemonList];

    text !== "" &&
      (newList = newList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(text.toLowerCase())
      ));

    type !== Type.Any &&
      (newList = newList.filter((pokemon) => pokemon.type.includes(type)));

    weakness !== Type.Any &&
      (newList = newList.filter((pokemon) =>
        pokemon.weaknesses.includes(weakness)
      ));

    setFilteredList(newList);
  }, [text, type, weakness]);

  return (
    <div className="flex flex-col gap-4">
      <section>
        <div className="flex gap-10 items-center">
          <label htmlFor="viewAs">View Pokemon as:</label>
          <Radio
            name="viewAs"
            label="List"
            checked={viewAs === View.List}
            onChange={(e) => e.currentTarget.checked && setViewAs(View.List)}
            crossOrigin={undefined}
          />
          <Radio
            name="viewAs"
            label="Tile"
            checked={viewAs === View.Cards}
            onChange={(e) => e.currentTarget.checked && setViewAs(View.Cards)}
            crossOrigin={undefined}
          />
        </div>
        <form className="flex flex-col gap-4 max-w-[500px] mx-auto">
          <Input
            label="Search Names"
            variant="standard"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
            crossOrigin={undefined}
          />
          <Select
            variant="standard"
            label="Type"
            // @ts-ignore
            onChange={(value) => setType(value ? value : Type.Any)}
            value={type.toString()}
          >
            {Object.keys(Type).map((key) => (
              // @ts-ignore
              <Option key={`searchType${Type[key]}`} value={Type[key]}>
                {key}
              </Option>
            ))}
          </Select>
          <Select
            variant="standard"
            label="Weakness"
            // @ts-ignore
            onChange={(value) => setWeakness(value ? value : Type.Any)}
            value={weakness.toString()}
          >
            {Object.keys(Type).map((key) => (
              // @ts-ignore
              <Option key={`searchType${Type[key]}`} value={Type[key]}>
                {key}
              </Option>
            ))}
          </Select>
          <Button onClick={clearForm} color="indigo">
            Clear Filters
          </Button>
        </form>
      </section>
      <section className="flex flex-wrap justify-center gap-4">
        {viewAs === View.List ? (
          <List>
            {filteredList.map((pokemon, index) => (
              <PokemonListItem
                key={`pokemon${pokemon.id}`}
                {...{ pokemon, index }}
              />
            ))}
          </List>
        ) : (
          filteredList.map((pokemon) => (
            <PokemonCard key={`pokemon${pokemon.id}`} {...{ pokemon }} />
          ))
        )}
      </section>
    </div>
  );
};
export default HomePage;
