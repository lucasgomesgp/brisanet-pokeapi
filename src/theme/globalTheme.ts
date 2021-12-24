import { createGlobalStyle } from "styled-components";
import { colors } from "../hooks/useColors";

export const GlobalTheme = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    body{
        background-color: ${colors.grey100};
    }

`;