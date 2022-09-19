import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeMain = styled(motion.main)`
    margin-top: 60px;
    padding-top:20px; 
    display:grid;
    grid-template-columns: 55% 45%;
    justify-content:center;
    align-items:flex-start;
    gap:2rem;

    @media(max-width:${({ theme }) => theme.mobile.width}){
        grid-template-columns: 1fr;
        justify-content:center;
        align-items:center;
    }

`

export const HomeMainSection = styled.section`

    width:100%;

    img{
        width:90%;
        height:auto;
    }
    
    div{
        h2{
            font-size:22px;
            font-weight:bold;
        }

        p{
            font-size:18px;
            color: ${({ theme }) => theme.color.dark}
        }
    }

  @media(max-width:${({ theme }) => theme.mobile.width}){
       width:100%;
       img{
        width:100%;
       }
    }
`
export const HomeAsideWrapper = styled.aside`
      @media(max-width:${({ theme }) => theme.mobile.width}){
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
    }

     @media(max-width:${({ theme }) => theme.mobile.widthsm}){
      grid-template-columns: 1fr;
    }
`

export const HomeAside = styled.div`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    justify-content:flex-start;
    align-items:flex-start;
    gap:16px;
    margin-bottom: 10px;

    img{
        width:100%;
        height:100%;
    }

    div{
        margin:0 5px 0 0; 
        h2{
            font-size:18px;
            font-weight:bold;
        }
        p{
            color:${({ theme }) => theme.color.dark};
            font-size:16px;
        }
    }
  @media(max-width:${({ theme }) => theme.mobile.width}){
        grid-template-columns: 1fr;
        justify-content:center;
        align-items:center;
        gap: 4px;
    }
   
`

export const Card = styled.aside`
    border:1px solid ${({ theme }) => theme.color.red};
    padding-bottom: 5px;
    .image{
        width:100%;
        height:15em;
        padding: 0;
        img{
            width:100%;
            height:100%;
        }
    }

    div{
        padding:0 5px;
        margin:0 5px 0 0;
        h3{
            font-size:20px;
            text-transform:capitalize;
            font-weight:600;
        }
        p{
            color:${({ theme }) => theme.color.dark};
            font-size:16px;
        }
    }
    span{
        display:block;
    }
    a{
        display:inline-block;
        padding:.5rem .8rem;
        color:${({ theme }) => theme.color.white};
        background-color:${({ theme }) => theme.color.dark};
        text-transform:capitalize;
        font-size:18px;
        margin-top:5px;
        border-radius:5px;

        &:hover{
        color:${({ theme }) => theme.color.dark};
        background-color:${({ theme }) => theme.color.white}; 
        border: 1px solid ${({ theme }) => theme.color.red}
        }
    }

`

export const SectionHome = styled(motion.section)`
    margin-top:20px;
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    justify-content:flex-start;
    flex-flow:column;
    align-items:flex-start;
    gap:1rem;


  @media(max-width:${({ theme }) => theme.mobile.width}){
        grid-template-columns: repeat(2, 1fr);
        justify-content:center;
        align-items:center;
    }

    @media(max-width:${({ theme }) => theme.mobile.widthsm}){
        grid-template-columns: 1fr;
       
    }
`