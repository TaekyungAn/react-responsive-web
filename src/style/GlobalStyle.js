/* eslint-disable no-undef */
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
	box-sizing: border-box;
    
    }
    html{
        /* font-size: 62.5%; */
        font-size: 70%;
        font-family: "DM Sans", sans-serif;
    };
    body{
        padding: 0;
        margin: 0;

    };
    button{
        display: flex;
        justify-content: center;
        cursor: pointer;
        outline: none;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    a{
        text-decoration: none;
        color: inherit;
        
    }
`;

export default GlobalStyle;
