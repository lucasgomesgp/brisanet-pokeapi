import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { CardErrorTitle, Cards } from "./styles";

export interface Pokemon{
    id: string;
    name: string;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            };
        };
    };
};
export function AllPokemons() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    let limit = 20;

    useEffect(() => {
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
        console.log(pokemons);
    }, []);

    return (
        <>
            <Navbar />
            <ThemeSwitcher />
            <Cards>
                {pokemons.length >= 1 ? (
                    pokemons.map((pokemon) => (
                        <Card
                            src={pokemon.sprites.other.dream_world.front_default}
                            name={pokemon.name}
                            id={pokemon.id}
                            key={pokemon.id + "." + pokemon.name}
                        />
                    ))
                ) : (
                    <CardErrorTitle>Loading Pokemons</CardErrorTitle>
                )}
            </Cards>
        </>
    );
}
