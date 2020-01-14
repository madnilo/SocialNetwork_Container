import { createGlobalStyle } from "styled-components";
import theme from "./DefaultTheme";

const GlobalStyles = createGlobalStyle`  
    html {
        height: 100%;
        font-size: 12px;
        font-family: "Roboto", arial, helvetica, sans-serif;
    }
    body {
        color: ${props => props.theme.Gray1};
        height: 100%;
        margin: 0;
        @media (${theme.mobileScreen}){
            font-size: 1.5rem;
        }
        @media (${theme.desktopScreen}){
            font-size: 1rem;
        }
        line-height: 2;
        font-family: sans-serif;
        background: ${theme.Gray6}
    }
    a {
        text-decoration: none;
        color: ${theme.Blue1};
        font-weight: 600;
    }
    th, td {
        text-align: center;
    }
    th {
        padding: 12px 8px;
    }
    td {
        padding: 8px;
    }
    fieldset {
        border: 0;
        padding: 0;
    }
    label, input {
        display: block;
    }
    
`;

export default GlobalStyles;
