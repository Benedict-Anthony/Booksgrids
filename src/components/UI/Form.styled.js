import styled from "styled-components"
import { motion } from "framer-motion";



export const Main = styled(motion.main)`
    margin-top:60px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 5rem;

    @media(max-width:${({ theme }) => theme.mobile.width}){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        margin-top: 90px;
    } 
`
export const Div = styled.div`
    width: 100%;
    flex: 1;

    img{
        width: 100%;
    }

    @media(max-width:${({ theme }) => theme.mobile.width}){
       display: none;
       flex:0;
    }

`
export const FormForm = styled.form`
    width: 100px;
    flex:1;
    background-color: #d4d5d6;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px #fff;

    h3{
        font-size: 20px;
        color:${({ theme }) => theme.color.dark};
        font-weight: 500;
        margin-bottom: 15px;
        text-align: left;

        /* &::after{
            content: '';
            width: 100%;
            height: 1px;
            margin-top: 3px;
            opacity: .8;
            background-color:${({ theme }) => theme.color.dark};
            position: absolute;
            bottom: 0;
            left:0;
        } */
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 10px;
        width: 100%;

        label{
            color: ${({ theme }) => theme.color.dark};
            font-size: 18px;
            
            svg{
                color: ${({ theme }) => theme.color.blue};


            }
        }
        input, textarea{
            display: block;
            width: 100%;
            border: 0;
            outline: 0;
            padding:.5rem 4px;
            border-radius: 5px;
            font-size: 18px;
            color: ${({ theme }) => theme.color.dark};
            margin-bottom: 4px;
            resize: none;

            &:focus{
                outline: 0;
                box-shadow: 0 4px 8px #fff;

            }
        }
    }

    ul{
        display:flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

      @media(max-width:${({ theme }) => theme.mobile.width}){
       width:100%;
    }
    
`

export const Button = styled.button`
    display: inline-block;
    margin-top: 14px;
    border: 0;
    outline: 0;
    padding:.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    background-color: ${({ theme }) => theme.color.blue};
    color:${({ theme }) => theme.color.white};
    transition: .4s cubic-bezier(0.19, 1, 0.22, 1);


    &:focus,&:hover{
        transform: scale(.96);
        transition: .4s cubic-bezier(0.19, 1, 0.22, 1);
    }
`

