import styled from "styled-components";
import { colors } from "../../hooks/useColors";

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 32.25rem;
    height: 21.5rem;
    margin-top: 0.5625rem;
`;

const Subtitle = styled.h2`
    font-weight: 600;
    font-size: 1.5rem;
    color: ${colors.grey500};
`;

const Description = styled.h4`
    font-weight: 400;
    font-size: 0.875rem;
    color: ${colors.grey400};
    width: 22.875rem;
    text-align: center;
    margin-top: 0.5625rem;
`;

const ButtonSearch = styled.button`
    width: 12.40rem;
    height: 3.00rem;
    border: 0.0625rem solid ${colors.grey300};
    font-weight: 500;
    background-color: transparent;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    color: ${colors.grey300};
    margin-top: 2.4375rem;
`;

export {
    Main,
    Image,
    Subtitle,
    Description,
    ButtonSearch
}