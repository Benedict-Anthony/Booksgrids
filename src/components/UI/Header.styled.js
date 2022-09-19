import styled from "styled-components";

export const StyledHeader = styled.header`
      position: fixed;
      top: 0;
      right: 0;
      left:0;
      background-color: #fff;
      box-shadow: 0px 2px 2px ${({ theme }) => theme.header};
      padding: 1rem 0;
      z-index: 10;

`

export const Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;

    .logo{
        z-index: 10;
        h1{
            font-size: 24px;
            font-weight: bold;
            color: ${({ theme }) => theme.color.blue};
            text-transform: uppercase;
            span{
                color: ${({ theme }) => theme.color.red};
            }
        }
    }

     .nav_links,
     .nav_icons{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .menubar{
                    display: none;
                }
            li{
                color: ${({ theme }) => theme.color.white};
                margin: 0 15px;
                font-size: 18px;
                &:hover{
                        transform: scale(.98);
                        cursor: pointer;
                }

               a{
                &:hover{
                    color: ${({ theme }) => theme.color.red};

                }
               }

            }
        }

        .nav_icons{
            li{
                padding: 0.2rem .4rem;
                background-color:${({ theme }) => theme.color.blue};
                border-radius: 5px;
                font-size: 20px;
                a{
                     color: ${({ theme }) => theme.color.white};
                    &:hover{
                        color: ${({ theme }) => theme.color.white};
                }
                }
            }
        }
    @media(max-width:${({ theme }) => theme.mobile.width}){
        .nav_links{
            position: absolute;
            top: 0;
            left: -100vw;
            width: 85%;
            height:50vh;
            background-color:#fff;
            box-shadow: 2px 3px 4px #ccc;
            flex-direction: column;
            padding-bottom: 2rem;
            padding-top: 5rem;
            transition: all .4s ease-in;
            z-index: 8;

            li{
                margin-top: 1rem;
                
                &:hover{
                border-bottom: 1px outset red;

                }

           
            }
        }
       

        .nav_icons{
             li.menubar{
                display: block;
            }
        }
    }

    .nav_links.active{
            left: 0;
            transition: all .4s ease-in;

        }


  @media(max-width:${({ theme }) => theme.mobile.widthsm}){
       .logo{
            h1{
                font-size: 18px;
                font-weight: 500;
            }
       }

       .nav_icons{
        li{
            margin: 0 2px;
            a{
                font-size: 18px;
            }
        }
       }
    }
`