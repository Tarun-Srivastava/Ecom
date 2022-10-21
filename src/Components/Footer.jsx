import  styled  from 'styled-components';
import React from 'react'
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import {mobile} from '../responsive'
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #dddddd;
    
    ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0;
`;
const SocialContainer = styled.div`
    display: flex;
    
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color: #${props=>props.color};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    border-radius: 50%;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    
    ${mobile({display:"none"})}
`;

const Title=styled.h3`
    margin-bottom: 30px;
`;

const List =styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItems=styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    :hover{
        color: #4d4d4d;
    }
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
    
    ${mobile({backgroundColor:"#d4d3d3"})}
`;
const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment =styled.img`
    width: 60%;
    height: 60%;
`;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>VER À SOIE</Logo>
                <Desc>
                La Redoute : achat en ligne, code promo, livraison à domicile ou livraison gratuite en relais colis, reprise ou échange gratuit. Livraison 24H chrono ou sur RDV. Large choix de produits de marque. Les plus grandes marques sont au catalogue de La Redoute. 18 modes de paiement sécurisés sont acceptés dont la carte bleue, le paiement à la livraison et Paypal. Retrouvez nos autres sites e-commerce francophones La Redoute Belgique et La Redoute Suisse.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon >
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItems>Home</ListItems>
                    <ListItems>Cart</ListItems>
                    <ListItems>Men Fashion</ListItems>
                    <ListItems>Woman Fashion</ListItems>
                    <ListItems>Kids</ListItems>
                    <ListItems>Accessories</ListItems>
                    <ListItems>My Account</ListItems>
                    <ListItems>Order Tracking</ListItems>
                    <ListItems>Wishlist</ListItems>
                    <ListItems>Terms</ListItems>
                </List>
            </Center>
            <Right>

                <Title>Contact</Title>
                <ContactItem>
                   <Room style={{marginRight:"10px"}}/> 12/24 SarojniNagar, South Delhi, 268001
                </ContactItem>
                <ContactItem>
                   <Phone style={{marginRight:"10px"}}/> +420 6942069
                </ContactItem>
                <ContactItem>
                   <MailOutline style={{marginRight:"10px"}}/> contact@verasoie.dev
                </ContactItem>
                <Payment src="Images/Payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
