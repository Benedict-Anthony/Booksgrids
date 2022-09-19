import styled from "styled-components";
import { motion } from "framer-motion"

export const StyledProfileSection = styled(motion.section)`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 10px;
    width: 100%;

      @media(max-width:${({ theme }) => theme.mobile.width}){
        grid-template-columns: 1fr;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
 
`

export const ImageWrapper = styled.div`

    width: 20rem;
    height: 20rem;

    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border:2px solid ${({ theme }) => theme.header};
        border-radius: 50%;
    }

    @media(max-width:${({ theme }) => theme.mobile.width}){
        width: 10rem;
        height: 10rem;
        margin-bottom: 10px;
        margin: 0 auto;
    }

`

export const InfoWrapper = styled.div`
    width: 100%;
    padding-top: 20px;
    text-align: center;
    div{
        width: 100%;
        h2{
            font-size: 20px;
            font-weight: 600;
            color: ${({ theme }) => theme.color.dark};
        }
    }

    div{
        p{
            font-size: 18px;
            color: ${({ theme }) => theme.color.dark};
            line-break: 1.6rem;
            font-weight: 300;
            
        }
    }

`

export const SocialIcons = styled.div`

    display:flex;
    justify-content:center;
    align-items: center;
    margin-top: 15px;
    gap: 1rem;

    a{
        display: block;
        text-align: center;
        background-color: ${({ theme }) => theme.header};
        color:${({ theme }) => theme.color.white};
        padding:2px 10px;
        padding-top: 5px;
        border-radius: 7px;

        &:hover{
            opacity:.89;
            transform: scale(.88);
            transition: cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        svg{
            text-align: center;
            font-size: 20px;
        }
    }

`

export const RelatedPost = styled(motion.section)`
    margin-top:35px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-content:space-between;
    align-items: center;
    gap: 1.2rem;


`

export const MorePost = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.header};
    border-left: 1px solid ${({ theme }) => theme.header};
    border-right: 1px solid ${({ theme }) => theme.header};

    div{
        width: 15rem;
        height: 6rem;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 3px;


        }
    }

    a{
        font-size: 16px;
        width: 100%;
        font-weight: 300;
    }

    @media(max-width:${({ theme }) => theme.mobile.width}){

        /* margin-bottom: 10px; */
  div{
        width: 10rem;
        height: 4rem;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;


        }
    }
    a{
        font-size: 14px;
        width: 100%;
        font-weight: 300;
    }
        }
`