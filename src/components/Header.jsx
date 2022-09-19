import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaUser, FaBars, FaSearch, FaBook, FaTimes, FaClock } from "react-icons/fa"
import { useLocation } from 'react-router-dom'
import { StyledHeader, Nav } from "./UI/Header.styled";
import Container from './UI/Container.styled';

function Header() {
    const location = useLocation()
    const [showNav, setShowNav] = useState(false)

    function handleNAvMenu() {
        setShowNav(!showNav)
    }

    function initialShowNav() {
        setShowNav(false)
    }

    useEffect(() => {
        return () => {
            initialShowNav()
        };
    }, [location])
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <div className="logo">
                        <h1> <span><FaBook /> Book's </span>Grid </h1>
                    </div>
                    <div className={`nav_links ${showNav && "active"}`}>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/authors">Authors</Link></li>
                    </div>
                    <div className="nav_icons">
                        <li><Link to={"/search"}><FaSearch /></Link></li>
                        <li><Link to={"read-later"}><FaClock /></Link></li>
                        <li><Link to={"admin"}><FaUser /></Link></li>
                        <li className='menubar'>{!showNav ? <FaBars onClick={handleNAvMenu} /> : <FaTimes onClick={handleNAvMenu} />}</li>
                    </div>
                </Nav>
            </Container>
        </StyledHeader>
    )
}

export default Header
