import { FC } from "react";
import { Pokemon } from "../interfaces/PokemonResponse.interface";
import { ListItem } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

interface Props {
  pokemon: Pokemon;
  index: number;
}

const PokemonListItem: FC<Props> = ({ pokemon, index }) => {
  const navigate = useNavigate();

  const even = index % 2 === 0;

  return (
    <ListItem
      className={`grid grid-cols-4 ${even ? "bg-gray-200" : ""}`}
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      <span>{`${pokemon.num} ${pokemon.name}`}</span>
      <img src={pokemon.img} alt={pokemon.name} className="h-10" />
      <span>{`Type: ${pokemon.type.join(", ")}`}</span>
      <span>{`Weaknesses: ${pokemon.weaknesses.join(", ")}`}</span>
    </ListItem>
  );
};
export default PokemonListItem;
