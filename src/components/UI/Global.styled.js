import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        line-height:1.6em;
        list-style:none;
        text-decoration:none;
        transition: all .4s ease-in-out;

    }

    html{
        scroll-behavior: smooth;
        transition: all .4s ease-in-out;

    }


    body{
        width:100%;
        background-color:#fff;
        font-family: Arial, Helvetica, sans-serif;
    }

    img{
        width:130px;
    }

    h1,h2,h3,h4{
        text-transform:capitalize;
    }
    a{
        color:${({ theme }) => theme.color.dark}
    }

`



export default GlobalStyle