import styled from "styled-components";
import { motion } from "framer-motion";


export const StyledAuthor = styled(motion.section)`
    margin-top: 30px;
    padding-top: 5rem;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    justify-content:center;
    align-items:flex-start;
    gap:1rem;


    @media(max-width:${({ theme }) => theme.mobile.width}){
        grid-template-columns:1fr 1fr;
        align-items:center;
        justify-content:center;
}


    @media(max-width:${({ theme }) => theme.mobile.widthsm}){
        grid-template-columns:1fr;
        
}
`


export const StyledSingleAuthor = styled.article`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;

    .autImage{
        width:10rem;
        height:10rem;

        img{
            width:100%;
            height:100%;
            border-radius:50%;

        }
    }

`