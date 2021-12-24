import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Header, Nav, Items, Item, ExitHomeButton, ExitIcon, BolFavIcon } from "./styles";

export function Navbar() {
    const { logout } = useAuth();
    return (
        <>
            <Header>
                <Nav>
                    <Link to="/pokemon/fav">
                        <img src="/assets/logoLightSmall.png" alt="Logo Pokémon na cor branca" />
                    </Link>
                    <Items>
                        <Item>
                            <Link to="/pokemon/fav">
                                Favoritos
                                <BolFavIcon>1</BolFavIcon>
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/pokemon/search">
                                Procurar
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/pokemon/all">
                                Ver todos
                            </Link>
                        </Item>
                    </Items>
                    <ExitHomeButton onClick={logout}>
                        Sair
                        <ExitIcon src="/assets/logout.svg" alt="Icone da sair da página" />
                    </ExitHomeButton>
                </Nav>
            </Header>
        </>
    );
}