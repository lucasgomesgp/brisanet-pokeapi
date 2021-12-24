import { Container, FavIcon, ImagePokemon, Name, IdPokemon, Categorias, Categoria, BtnDetails } from "./styles";

interface CardProps{
    name: string;
    src: string;
    id: string;
    cardColor?: string;
    colorText?: string;
    categories?: {
        
    };
}

export function Card({ src, name, id, cardColor, colorText }: CardProps) {
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
                {/* <Categoria bgCard={cardColor} bgText={colorText}>
                    Elétrico
                </Categoria>
                <Categoria bgCard={cardColor} bgText={colorText}>
                    Fire
                </Categoria> */}
            </Categorias>
            <BtnDetails>
                Ver detalhes
            </BtnDetails>
        </Container >
    );
}