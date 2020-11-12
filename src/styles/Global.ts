import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --primary: #7761B0;
        --secondary: #F0C400;
        --background: #f1f1f1;
    }
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: 0;
    }
    body, html {
        background: var(--background);
        font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        height: 100%;
        width: 100%;
    }

`;

export default GlobalStyle;

