import { Container, FavIcon, ImagePokemon, Name, IdPokemon, Categorias, Categoria, BtnDetails } from "./styles";
import "./external.css";
interface CardProps {
    name: string;
    src: string;
    id: string;
    types: [{
        type: {
            name: string;
        }
    }]
}

export function Card({ src, name, id, types }: CardProps) {
    let categories = (types.map(current => current.type.name));
    return (
        <Container>
            <FavIcon src="/assets/heart-active.svg" alt="Icone de coração" />
            <ImagePokemon src={src} alt={name} />
            <Name>
                {name}
            </Name>
            <IdPokemon>
                ID: {id}
            </IdPokemon>
            <Categorias>
                {categories.length <= 1 ? (
                    <Categoria className={`${categories}`}>
                        {categories}
                    </Categoria>
                ) :
                    categories.map(cat => (
                        <Categoria className={`${cat}`}>
                            {cat}
                        </Categoria>
                    ))

                }
            </Categorias>
            <BtnDetails>
                Ver detalhes
            </BtnDetails>
        </Container >
    );
}