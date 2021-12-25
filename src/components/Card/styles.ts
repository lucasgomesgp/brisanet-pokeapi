import styled from "styled-components";
import { colors } from "../../hooks/useColors";

const Container = styled.div`
    width: 15.43125rem;
    height: 20.75rem;
    position: relative;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
    background-color: ${colors.white};
    padding-left: 0.5625rem;
    gap: 0.4rem;
`;

const FavIcon = styled.img`
    position: absolute;
    top: 0.87rem;
    right: 0.63rem;
    width: 2.64rem;
    height: 2.4rem;
`;
const ImagePokemon = styled.img`
    width: 8rem;
    height: 8rem;
    align-self: center;
`;

const Name = styled.h2`
    font-weight: 600;
`;

const IdPokemon = styled.h3`
    font-weight: 500;
    color: ${colors.colorId};
`;

const Categorias = styled.div`
    display: flex;
    gap: 1rem;

`;
const Categoria = styled.div`
    width: 4.125rem;
    height: 2.25rem;
    border-radius: 1rem;
    text-align: center;
    padding: 0.2rem;
`;

const BtnDetails = styled.button`
    width: 90%;
    align-self: center;
    width: 9.1875rem;
    height: 3rem;
    border: none;
    background-color: ${colors.primary};
    border-radius: 0.5rem;
    font-weight: 500;
    margin-top: 0.8rem;
    cursor: pointer;
`;

export{
    Container,
    FavIcon,
    ImagePokemon,
    Name,
    IdPokemon,
    Categorias,
    Categoria,
    BtnDetails
}