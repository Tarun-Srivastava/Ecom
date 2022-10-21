import React from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
    flex: 1;
    margin:5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F9F9F9;
    position: relative;
    
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;
const Info = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top:0;
    left:0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.6s ease-in-out;
    :hover{
        background-color: rgba(0,0,0,.1);
        opacity: 1;
    }
    
`;
const Icon = styled.div`
    width: 40px;
    height:40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    :hover{
        transform: scale(1.2);
    }
`;
const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon/>
                </Icon>
                <Icon>
                    <SearchOutlinedIcon/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>

        </Container>
    )
}

export default Product
