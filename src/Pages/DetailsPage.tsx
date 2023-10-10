import { Button, List } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { usePokemon } from "../context/pokemon.context";
import { PokemonListItem } from "../components";

const PokemonDetailsPage = () => {
  const { pokemonList } = usePokemon();

  const { id } = useParams();

  const navigate = useNavigate();

  const pokemon = pokemonList.find((mon) => mon.id === parseInt(id!))!;

  console.log(pokemon.prev_evolution);
  console.log(pokemon.next_evolution);

  const classList = "capitalize bg-white p-2";

  return (
    <div className="flex-1 flex flex-col items-center justify-between p-4">
      <h2 className="text-4xl">{`${pokemon.name} ${pokemon.num}`}</h2>
      <img src={pokemon.img} alt={pokemon.name} width={200} />
      <div className="bg-gray-400">
        <div className="grid grid-cols-2 gap-1 m-1">
          {Object.keys(pokemon).map((key) => {
            if (
              ["height", "weight", "candy", "spawn_time"].includes(
                key.toString()
              )
            )
              return (
                <span key={key} className={classList}>
                  {/* @ts-ignore */}
                  {key.replace("_", " ")}: {pokemon[key]}
                </span>
              );

            if (["type", "weaknesses"].includes(key.toString()))
              return (
                <span key={key} className={classList}>
                  {/* @ts-ignore */}
                  {key}: {pokemon[key].join(", ")}
                </span>
              );
          })}
        </div>
      </div>
      <div className="flex w-full gap-4">
        {pokemon.prev_evolution ? (
          <div className="w-[50%] me-auto">
            <h3>{`Previous Evolution${
              pokemon.prev_evolution.length > 1 ? "s" : ""
            }:`}</h3>
            <List>
              {pokemon.prev_evolution.map((evolution, index) => (
                <PokemonListItem
                  pokemon={
                    pokemonList.find((item) => item.num === evolution.num)!
                  }
                  {...{ index }}
                />
              ))}
            </List>
          </div>
        ) : null}

        {pokemon.next_evolution ? (
          <div className="w-[50%] ms-auto">
            <h3>{`Next Evolution${
              pokemon.next_evolution.length > 1 ? "s" : ""
            }:`}</h3>
            <List>
              {pokemon.next_evolution.map((evolution, index) => (
                <PokemonListItem
                  pokemon={
                    pokemonList.find((item) => item.num === evolution.num)!
                  }
                  {...{ index }}
                />
              ))}
            </List>
          </div>
        ) : null}
      </div>
      <Button
        color="indigo"
        onClick={() => navigate(-1)}
        className="self-start"
        title="Back"
        aria-label="Back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Button>
    </div>
  );
};
export default PokemonDetailsPage;

//   id: number;
//   num: string;
//   name: string;
//   img: string;
//   type: Type[];
//   height: string;
//   weight: string;
//   candy: string;
//   candy_count?: number;
//   egg: Egg;
//   spawn_chance: number;
//   avg_spawns: number;
//   spawn_time: string;
//   multipliers: number[] | null;
//   weaknesses: Type[];
//   next_evolution?: Evolution[];
//   prev_evolution?: Evolution[];
