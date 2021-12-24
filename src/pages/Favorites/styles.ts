import styled from "styled-components";
import { colors } from "../../hooks/useColors";

const ContainerCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center; 
`;

const EmptyFavorites = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const AstronautImg = styled.img`

`;
const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2.7825rem;
`;
const SubTitle = styled.p`
    font-weight: 400;
    font-size: 0.875rem;
    margin-top: 0.5rem;
`;
const SearchBtn = styled.button`
    margin-top: 2.4375rem;
    width: 14.5625rem;
    height: 2.8125rem;
    background-color: transparent;
    border: 0.0625rem solid ${colors.grey300} ;
    font-size: 0.875rem;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover{
        border-color: ${colors.grey100};
    }
`;

export {
    ContainerCard,
    EmptyFavorites,
    AstronautImg,
    Title,
    SubTitle,
    SearchBtn
}