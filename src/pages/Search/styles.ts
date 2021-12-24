import styled from "styled-components"
import { colors } from "../../hooks/useColors";

const InputSearch = styled.input`
    width: 47.8125rem;
    height: 3.375rem;
    border-radius: 0.5rem;
    outline: none;
    margin-top: 1.8125rem;
    border: 0.0625rem solid ${colors.borderWhiteInput};
    padding-left: 1.25rem;
    display: flex;
    justify-content: space-between;
   
    &::placeholder{
        font-weight: 400;
    }
`;


const SearchElements = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchIcon = styled.img`
    position: absolute;
    top: 3rem;
    right: 18rem;
`;
const BtnSearch = styled.button`
    border: none;
    cursor: pointer;
`;

const NoPokemons = styled.h2`
    text-align: center;
    margin-top: 2rem;
    text-align: center;
`;

const SearchArea = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;
export {
    InputSearch,
    SearchElements,
    SearchIcon,
    BtnSearch,
    NoPokemons,
    SearchArea
}