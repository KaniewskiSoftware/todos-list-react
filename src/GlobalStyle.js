import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    #root {
    min-height: 100vh;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #ededed;
    color: #000000;
    line-height: 1.15;
    }
`;
