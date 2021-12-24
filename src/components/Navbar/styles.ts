import styled from "styled-components";
import { colors } from "../../hooks/useColors";

const Header = styled.div`
`;

const Nav = styled.ul`
    height: 4.125rem;
    background-color: ${colors.primary};
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 4.125rem;
    margin: 0;
`;

const Item = styled.li`
    position: relative;
    cursor: pointer;
    a{
        text-decoration: none;
        color: ${colors.grey400};

    }
    &:hover::before{
        content:"";
        position: absolute;
        top: 2.5rem;
        height: 0.125rem;
        width: 100%;
        background-color: ${colors.borderGray};
    }
`;

const Items = styled.div`
    display: flex;
    gap: 4.75rem;
`;

const ExitIcon = styled.img`
    width: 1rem;
    height: 1rem;
`;

const ExitHomeButton = styled.button`
    width: 6.5625rem;
    height: 1.75rem;
    border: 0.0625rem solid ${colors.borderGray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background-color: transparent;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 1rem;
    cursor: pointer;
    
    &:hover{
        border: 0.0625rem solid ${colors.grey300};
        color: ${colors.grey300};
    }
`;

const BolFavIcon = styled.span`
    display: none;
    /* display: inline-block; */
    text-align: center;
    height: 1.4615rem;
    width: 1.4615rem;
    background-color: ${colors.borderGray};
    color: ${colors.white};
    border-radius: 90%;
    margin-left: 0.1rem;
`;

export {
    Header,
    Nav,
    Items,
    Item,
    ExitIcon,
    ExitHomeButton,
    BolFavIcon
}