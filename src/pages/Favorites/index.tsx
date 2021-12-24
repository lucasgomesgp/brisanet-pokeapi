import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { ContainerCard, EmptyFavorites, AstronautImg, Title, SubTitle, SearchBtn } from "./styles";

export function Favorites() {
    let navigate = useNavigate();

    function redirectToSearch(){
        navigate("/pokemon/search");
    }
    
    return (
        <>
            <Navbar />
            <ContainerCard>
                <EmptyFavorites>
                    <AstronautImg src="/assets/astronaut.png" alt="Astronauta" />
                    <Title>Está meio vazio por aqui!</Title>
                    <SubTitle>Procure por pokémons para adicioná-los aos seus favoritos.</SubTitle>
                    <SearchBtn onClick={redirectToSearch}>Procurar pokémons</SearchBtn>
                </EmptyFavorites>
            </ContainerCard>
            <ThemeSwitcher />
        </>
    );
}