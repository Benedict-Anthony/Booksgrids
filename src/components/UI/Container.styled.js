import styled from "styled-components";

const Container = styled.div`

    width:100%;
    max-width:1100px;
    margin:0 auto;
    padding:0 20px;

 @media(max-width:${({ theme }) => theme.mobile.width}){
    padding:0 10px;
    
    }
`


export default Container