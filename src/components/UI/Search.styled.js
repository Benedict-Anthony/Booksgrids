import styled from "styled-components";
import { motion } from "framer-motion";

export const SearchSection = styled(motion.section)`

    margin-top: 60px;
    padding-top:20px ;

`

export const FormDiv = styled.div`

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;

    form{
        position: relative;
        width: 30rem;
        

        input{
            width:100%;
            border: 0;
            box-shadow:0 2px 4px #333;
            padding: 10px 5px;
            border-radius: 5px;
            font-size: 18px;

            &:focus{
                outline: 0;
            }

            &::placeholder{
                font-weight: 300;
            }
        }

        button{
            position: absolute;
            top: 0;
            right: 0;
            bottom:0;
            padding: 0 10px;
            background-color: ${({ theme }) => theme.color.blue};
            color: #fff;
            font-size: 20px;
            text-transform: uppercase;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            outline: 0;
            border: 0;

            &:focus,
            &:active, 
            &:hover{
                transform: scale(.98);
                opacity: .8;
                cursor: pointer;
                transition:all ease-in-out;
            }
        }

    }



    @media(max-width:${({ theme }) => theme.mobile.widthsm}){
        /* margin-top: 30px; */
        form{
            width: 100%;

            input{
                &::placeholder{
                    font-size: 16px;
                }
            }
        }
    }
`