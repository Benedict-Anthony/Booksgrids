import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDetail = styled.main`
    margin-top: 80px;
    display:grid;
    grid-template-columns:60% 40%;
    align-items:flex-end;
    justify-content:space-between;
    column-gap: 2rem;


    @media(max-width:${({ theme }) => theme.mobile.width}){
        display:grid;
        grid-template-columns:1fr;
        align-items:center;
        justify-content:center;
    }

`

export const StyledSection = styled(motion.section)`
    h1{
        text-transform:capitalize;
        font-weight:semi-bold;
        font-size:20px;
    }

    img{
        width:100%;

    }

    p{
        font-size:18px;
        color:${({ theme }) => theme.color.dark}
    }

    li{
        padding: 10px 15px;
        background-color: #333;
        color:#fff;
        border-radius: 5px;
        text-transform: uppercase;
        width: 150px;
    }

    .author{
        font-size: 18px;
        padding: 10px 0;
        color: ${({ theme }) => theme.color.red};
    }

`

export const AsideStyle = styled(motion.aside)`
     margin-top: 20px;

    p{
        font-size: 18px;
        padding: 10px 0;
    }
`

export const Button = styled.button`

    display: inline-block;
    padding: 10px 20px;
    background-color:blue;
    font-size: 18px,;
    color: #fff;
    margin: 5px 0;
    border:0;
    border-radius: 10px;


`

export const CommentDiv = styled.div`

    margin-top: 30px;
    width: 90%;

    form {
        width: 100%;
        div{
            margin: 10px 0;

        }

        label{
            font-size: 18px;
        }
        input, textarea{
            resize: none;
            width: 100%;
            padding: 7px 5px;
            font-size: 16px;
            border: 0;
            outline: 0;
            border-radius: 5px;
            box-shadow: 0 2px 6px #333;
        }

        button{
            padding: 5px 10px;
            border:2px outset ${({ theme }) => theme.color.red};
            border-radius:4px;
            outline: 0;
            background-color: #fff;
            color: #333;
            font-size: 18px;
            margin-top: 10px;

            &:active,
            &:hover{
                transform: scale(.98);
                opacity: .8;
            }
        }
    }

    @media(max-width:${({ theme }) => theme.mobile.widthsm}){
       
            width: 100%;
        
    }
`


export const DIV = styled.div`

    width: 100%;
    margin-top: 20px;
    background-color: #eee;
    padding: 15px 10px;
    div{
        margin: 10px 0;
        background-color: #fff;
        padding: 10px 7px;
        border-radius: 4px;

        h3{
            font-weight: 500;
            font-size: 20px;
        }
        p{
            font-size: 18px;
        }
    }
`