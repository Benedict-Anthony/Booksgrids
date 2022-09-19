import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Container from './UI/Container.styled'
import { FaBook, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
function Footer() {
    const today = new Date()
    return (
        <FooterStyled>
            <Container>
                <FooterSection>
                    <div className="logo">
                        <h1> <span><FaBook /> Book's </span>Grid </h1>
                    </div>

                    <nav>
                        <div className={`nav_links`}>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/authors">Authors</Link></li>
                        </div>
                    </nav>
                    <nav>
                        <div className={`nav_icons`}>
                            <li><a href="facebook.com"><FaFacebook /></a> </li>
                            <li><a href="twiter.com"><FaTwitter /></a> </li>
                            <li><a href="instagram.com"><FaInstagram /></a> </li>

                        </div>
                    </nav>
                </FooterSection>
                <h3> <span>&copy; {today.getFullYear()}</span> | All right Reseverd.</h3>
            </Container>
        </FooterStyled>
    )
}

export default Footer
const FooterStyled = styled.footer`

    background-color: #eee;
    color: ${({ theme }) => theme.color.dark};
    padding: 50px 5;
    margin-top: 150px;
    text-align: center;
    h3{
        font-size: 18px;
        
        span{
            color: ${({ theme }) => theme.color.red};

        }
    }
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

`

const FooterSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 5px;
    height: 100%;
    nav{
        li{
            margin: 3px 0;
            a{
                text-transform: uppercase;
                font-size: 15px;
                font-weight: 550;

                svg{
                    color: ${({ theme }) => theme.color.red};
                    font-size: 20px;
                }
            }
        }
    }


    @media(max-width:${({ theme }) => theme.mobile.width}){
        flex-direction: column-reverse;
        row-gap: 3rem;
        justify-content: center;
        text-align: center;
    }

    .nav_icons{
        display: flex;
        gap:2em;
    }
`