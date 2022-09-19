import React from 'react'
// import styled from 'styled-components';



function Alert({ message, textColor, bgColor }) {

    const AlertStyle = {
        color: textColor ? textColor : "#fff",
        backgroundColor: bgColor ? bgColor : "purple",
        fontSize: "18px",
        padding: "14px 10px",
        marginBottom: "10px",
        borderRadius: "10px"
    }
    return (
        <div style={AlertStyle}>{message ? message : "Enter all fields"}</div>
    )
}

export default Alert

