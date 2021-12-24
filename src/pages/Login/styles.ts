import styled from "styled-components";
import { colors } from "../../hooks/useColors";

const Title = styled.h1`
    font-weight: 700;
    width: 22.8125rem;
    margin-top: 4.9375rem;
    
`;

const Image = styled.img`
    align-self: flex-start;
    margin-top: 2.0625rem;
`;

const Input = styled.input`
    width: 21.8125rem;
    height: 3.375rem;
    border-radius: 0.5rem;
    border: none;
    border: 0.0625rem solid ${colors.grey300};
    padding-left: 1rem;
    
    &::placeholder{
        color: ${colors.grey300};
        font-weight: 400;
        font-size: 0.75rem;
    }

`;

const Button = styled.button`
    width: 21.975rem;
    height: 3.375rem;
    background-color: ${colors.primary};
    color: ${colors.grey500};
    border-radius: 0.5rem;
    border: none;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: all 100ms ease-in-out;

    &:hover{
        background-color: transparent;
        border: 0.2rem solid ${colors.primary};
    }
`;


const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${colors.grey100};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const Content = styled.main`
    display: flex;
    flex-direction: column;
    margin-left: 5.25rem;
    flex-wrap: wrap;
`;

const BgPokemons = styled.div`
    width: 55.1875rem;
    height: 100vh;
    background-size: contain;
    background: url("/assets/bg-light.png") no-repeat;
`;


export {
    Title,
    Image,
    Input,
    Button,
    Form,
    Container,
    Content,
    BgPokemons
}