import  {Send} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center"})}
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    padding: 0;
    background-color: white;
    display: flex;
    justify-content: space-between;
     border: 1px solid lightgray;
     
    ${mobile({width:"80%"})}
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    transition: 0.6s ease-in-out;

    :hover{
        flex: 1.1;
        background-color: #00b4b4;
    }
`;
const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products</Description>
            <InputContainer>
                <Input></Input>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
