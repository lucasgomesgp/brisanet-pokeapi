import { useState } from "react";
import { FormEvent } from "react";
import { Card } from "../../components/Card";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { Pokemon } from "../AllPokemons";
import {
    BtnSearch,
    InputSearch,
    SearchElements,
    SearchIcon,
    NoPokemons,
    SearchArea,
} from "./styles";

export function Search() {
    const [pokeName, setPokeName] = useState<string | number>("");
    const [pokemonSearch, setPokemonSearch] = useState<Pokemon>();

    function searchPokemon(event: FormEvent) {
        event.preventDefault();
        let nameWithChanges = typeof pokeName == "string" ? pokeName.toLocaleLowerCase() : pokeName;
        fetch(
            `https://pokeapi.co/api/v2/pokemon/${nameWithChanges}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemonSearch(data);
                alert(`${data.name} encontrado!`)
            }).catch((error) => {
                alert(`${pokeName} não foi encontrado, tente novamente!`);
            });
    }
    return (
        <>
            <Navbar />
            <SearchElements onSubmit={searchPokemon}>
                <InputSearch
                    placeholder="Procure por pokémons"
                    type="text"
                    value={pokeName}
                    onChange={(event) => setPokeName(event.target.value)}
                />
                <BtnSearch>
                    <SearchIcon src="/assets/search.svg" alt="Icone de busca" />
                </BtnSearch>
            </SearchElements>
            <SearchArea>
                {pokemonSearch ? (
                    <Card
                        id={pokemonSearch.id}
                        name={pokemonSearch.name}
                        src={pokemonSearch.sprites.other.dream_world.front_default}
                        types={pokemonSearch.types}
                    />
                ) : (
                    <NoPokemons>Não há Pokemons no momento :(</NoPokemons>
                )}
            </SearchArea>
            <ThemeSwitcher />
        </>
    );
}
