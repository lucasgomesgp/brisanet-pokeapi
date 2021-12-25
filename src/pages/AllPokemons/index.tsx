import { Card } from "../../components/Card";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { usePokemons } from "../../hooks/usePokemons";
import { CardErrorTitle, Cards } from "./styles";

export interface Pokemon {
    id: string;
    name: string;
    sprites: {
        other: {
            dream_world: {
                front_default: string;
            };
        };
    };
    types: [
        {
            type: {
                name: string;
            }
        }
    ]
};
export function AllPokemons() {
    const pokemons = usePokemons();

    return (
        <>
            <Navbar />
            <ThemeSwitcher />
            <Cards>
                {pokemons.length > 1 ? (
                    pokemons.map((pokemon) => (
                        <Card
                            src={pokemon.sprites.other.dream_world.front_default}
                            name={pokemon.name}
                            id={pokemon.id}
                            key={pokemon.id + "." + pokemon.name + "." + Date.now()}
                            types={pokemon.types}
                        />
                    ))
                ) : (
                    <CardErrorTitle>Carregando Pokemons</CardErrorTitle>
                )}
            </Cards>
        </>
    );
}
