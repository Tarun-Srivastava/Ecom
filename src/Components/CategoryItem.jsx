import styled from "styled-components"
import React from 'react';
import { mobile } from "../responsive";

const Container =styled.div`
    flex:1;
    margin: 3px;
    height: 95vh;
    position: relative;
`;
const Image=styled.img`
    width: 100%;
    height: 100%;
    object-fit: "cover";
    object-position:"-20% 2%"
    ${mobile({height:"30vh"})}
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title=styled.h2`
    color:white;
    margin-bottom: 20px;
    font-size: 30px;
`;
const Button =styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 600;
    transition: 0.4s ease-in-out;
    border-radius: 5px;
    :hover{
        letter-spacing: 6px;
    }
`;

const CategoryItem = ({item}) => {
    // console.log(item.item.id);
    return (
        <Container>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
        </Container>
    )
}

export default CategoryItem
