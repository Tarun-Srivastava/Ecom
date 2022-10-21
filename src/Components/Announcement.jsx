import styled from 'styled-components'
import React from 'react'

const Container =styled.div`
    height:fit-content;
    padding: 5px;
    width: 100%;
    font-size: 1.5vh;
    letter-spacing: 2px;
    background-color: #93B5C6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;    
`


const Announcement = () => {
    return (
        <Container>
           Super Deal! Free Shipping on Orders Over ₹10000 
        </Container>
    )
}

export default Announcement
