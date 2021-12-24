
import { useContext } from "react";
import { Pokemon } from "../pages/AllPokemons";
import { PokemonContext } from "./contexts/PokemonContext";

export function usePokemons() {
    const { pokemons } = useContext(PokemonContext);
    return pokemons;
}