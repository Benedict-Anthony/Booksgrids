import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.main)`
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
    padding: 0 2rem;
    padding-top:5%;
    display:flex;
    justify-content: space-between;
    align-items: flex-start;


    .toggler{
        position: absolute;
        top:4.7rem;
        left:.5rem;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.color.red};
        cursor: pointer;
        display: none;
    }

    @media(max-width:900px){

    margin-top: 60px;

        .toggler{
            display: block;
        }
    }
`

export const Profilesection = styled.section`
    margin-top: 20px;
    padding: 0 20px;
    border-right: 1px solid red; 
    width: 100%; 
    display: flex;
    justify-content: flex-start;
    align-items:center;
    flex-flow: column;
    position: relative;
    text-align: center;

    div{
        margin-top: 15px;

        img{
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
        }

        h2{
            font-size: 24x;
            font-weight: 500;

            p{
                font-size: 20px;
                margin-top: 20px;
                line-height: 1.4em;
            }
        }

    }
        .edit{
            position: absolute;
            top:0;
            left: 0;
            font-size: 22px;
            color: ${({ theme }) => theme.color.red};
            cursor: pointer;

            
        }

    @media(max-width:900px){
        display: none;

        &.show{
            display: block;
        }

        .edit{
            top:10rem;
            left:-1rem;
        }
        }
`


export const AdminD = styled.section`

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;


        @media(max-width:${({ theme }) => theme.mobile.width}){
            margin-top: 30px;
            grid-template-columns: repeat(2, 1fr);
            
        }


        @media(max-width:${({ theme }) => theme.mobile.widthsm}){
            grid-template-columns:1fr;
            
        }
`

export const AdminDCompoent = styled.section`
      width:18rem;
      /* height: auto; */
      border: 1px gray solid;
      margin: 0 3px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

        article{
            width: 100%;
             display: flex;
             align-items: flex;
            height: 100%;
            justify-content: space-between;
            flex-direction: column;

            img{
                    width: 100%;
                }

            .line{
                width: 100%;
                height: 1px;
                background-color: gray;
                margin-top: 10px;
            }

            .delete{
                color:red;
            }

            .update{
                color:green;
            }

            .read{
                padding: 5px 20px;
                background-color: #333;
                color:#fff;
                border: 1px solid #333;
                border-radius: 5px;

                &:hover{
                background-color: #fff;
                color:#333;
                }
            }
        }

        div{
            padding: 0 5px;
        }

        .button{
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            padding: 10px 3px;
            svg{
                font-size: 20px;
            }
        }

         @media(max-width:900px){
            width: 100%;
            
        }

`


