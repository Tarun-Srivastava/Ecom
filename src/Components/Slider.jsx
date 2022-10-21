import React from 'react'
import styled from "styled-components"
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { sliderItems } from './data';
import { useState, useEffect } from 'react';
import { mobile } from '../responsive';

const Container =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display:"none"})}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #cfffb1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: ${prrops=> prrops.direction ==="left" && "10px"};
    right: ${prrops=> prrops.direction ==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 50%;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease-in-out;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide =styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center ;
    background-color: #${props=>props.bg};
`;
const ImageConatiner =styled.div`
    height: 100%;
    flex: 1;
`;
const Image =styled.img`
    height:95% ;
    padding: 45px 50px;
    transition: 3s ease-in-out;
    :hover{
        transform:translateX(10px);
    }
`;
const InfoContainer =styled.div`
    flex: 1;
    padding: 50px;
    align-items: center;
`;

const Title =styled.h1`
    height:70px;
    font-size: 60px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 15px;
    font-size: 15px;
    background-color: transparent;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    letter-spacing: 2px;
    border-radius: 5px;
    :hover{
        letter-spacing: 7px;
    }
`;

export const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleclick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:3)
        }
        else{
            setSlideIndex(slideIndex<3?slideIndex+1:0)
        }
    };
    useEffect(() => {
        setInterval(() => {
            setSlideIndex(slideIndex=>slideIndex<3?(slideIndex+1):0);
        }, 8000);
      },[]);
    
    
    return (
        <div>
            <Container>
               <Arrow direction="left" onClick= {()=>handleclick("left")}>
                    <KeyboardArrowLeftOutlinedIcon/>
                </Arrow> 
                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map((item)=>(
                        <Slide bg={item.bg} key={item.id}>
                        <ImageConatiner>
                            <Image src={item.img} alt="model1"/>
                        </ImageConatiner>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
                </Wrapper>
                <Arrow direction="right" onClick= {()=>handleclick("right")}>
                    <KeyboardArrowRightOutlinedIcon/>
                </Arrow> 
            </Container>
        </div>
    )
}
