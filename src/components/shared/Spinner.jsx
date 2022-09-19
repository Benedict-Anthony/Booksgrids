import React from 'react'
import book from "../../images/book.gif"
import styled from 'styled-components'

function Spinner() {
    return (
        <Loader>
            <img src={book} alt="" />
        </Loader>
    )
}

export default Spinner



const Loader = styled.div`

    width:100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        background-color: transparent;
    }
`