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
    background-color: ${({theme}) => theme.color.seashell};
    color: ${({theme}) => theme.color.black};
    line-height: 1.15;
    }
`;
