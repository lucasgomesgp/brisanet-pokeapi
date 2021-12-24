import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { ButtonSearch, Description, Image, Main, Subtitle } from "./styles";

export function NoFavorites() {
    return (
        <>
            <Navbar />
            <Main>
                <Image src="/assets/astronaut.png" alt="Desenho de uma astronauta" />
                <Subtitle>Está meio vazio por aqui!</Subtitle>
                <Description>Procure por pokémons para adicioná-los aos seus favoritos.</Description>
                <ButtonSearch>Procurar pokémons</ButtonSearch>
            </Main>
            <ThemeSwitcher />
        </>
    );
}