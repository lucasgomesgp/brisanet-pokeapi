import styled from "styled-components";
import { colors } from "../../hooks/useColors";

const ButtonMoon = styled.button`
    width: 8.6875rem;
    height: 1.9375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 500;
    font-size: 0.75rem;
    border: 0.0625rem solid ${colors.grey400};
    border-radius: 1.375rem;
    cursor: pointer;
    margin-top: 4.3125rem;
    background-color: ${colors.white};
    cursor: pointer;
    position: fixed;
    bottom: 1.25rem;
    left: 5.25rem;
    z-index: 5;
`;

export {
    ButtonMoon
};