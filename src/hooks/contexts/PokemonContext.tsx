import { createContext, ReactNode, useEffect, useState } from "react";
import { Pokemon } from "../../pages/AllPokemons";

export const PokemonContext = createContext({} as PokemonsContextProps);

interface PokemonProps {
    children: ReactNode;
}

interface PokemonsContextProps {
    pokemons: Pokemon[];
}
export default function PokemonProvider(props: PokemonProps) {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    let limit = 40;

    useEffect(() => {
        function getAllPokemons() {
            for (let i = 1; i <= limit; i++) {
                fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                    .then((response) => response.json())
                    .then((data) => {
                        let previousState = pokemons;
                        previousState.push(data);
                        setPokemons(previousState);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }
        getAllPokemons();
    }, [limit, pokemons]);
    return (
        <PokemonContext.Provider value={{ pokemons }}>
            {props.children}
        </PokemonContext.Provider>
    );
}