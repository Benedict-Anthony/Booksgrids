import React from 'react'
import processing from "../../images/processing.gif"
import styled from 'styled-components'

function Processing() {
    return (
        <Process>
            <img src={processing} alt="" />
        </Process>
    )
}

export default Processing



const Process = styled.div`

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