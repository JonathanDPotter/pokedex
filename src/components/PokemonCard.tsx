import { FC } from "react";
import { Pokemon } from "../interfaces/PokemonResponse.interface";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <Card
      key={`pokemon${pokemon.id}`}
      className="border border-black flex flex-col justify-between w-[300px] cursor-pointer hover:bg-blue-gray-50"
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      <CardHeader className="m-0 p-2 text-center rounded-b-none bg-red-200 text-black">
        <h2>
          {pokemon.name} {pokemon.num}
        </h2>
      </CardHeader>
      <CardBody className="flex-1">
        <img src={pokemon.img} alt={pokemon.name} className="m-auto" />
      </CardBody>
      <CardFooter className="flex flex-col gap-4">
        <p>Type: {pokemon.type.join(", ")}</p>
        <p>Weaknesses: {pokemon.weaknesses.join(", ")}</p>
      </CardFooter>
    </Card>
  );
};
export default PokemonCard;
