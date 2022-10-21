import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  width: 45vh;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};

  color: ${(props) => props.type === "filled" && "white"};
  transition:.4s ease;
  :active{
    transform: ${(props) =>
    props.type === "filled" && "translateY(1px)"};
  }
  :hover{
    background-color: ${(props) =>
    props.type === "filled" ? "#201818" : "transparent"};
    letter-spacing: 1px;
  }
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid rgba(0,0,0,0.1);
  border-radius:10px; */

`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  /* border-right: 1px solid rgba(0,0,0,0.1);
  border-radius:10px; */
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const ProductId = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const Hr = styled.hr`
  background: #eee;
  border: none;
  height: 1px;
`;
const ProductPrice = styled.div`
  font-style: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border:0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.div`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type==="total" && "500"};
  font-size: ${props=>props.type==="total" && "24px"};
`;
const SummaryItemText = styled.div`
  
`;
const SummaryItemPrice = styled.div`
  
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  transition: .4s ease-in-out;
  :active{
    transform:translateY(1px);
  }
  :hover{
    letter-spacing: 1px;
  }
`;

const ProdctAmountContainer = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="Images/Image1.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIE THUNDER STYLED SUIT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>93813718293
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b>S
                  </ProductSize>
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>₹49000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="Images/Image2.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIE THUNDER STYLED SUIT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>93813718294
                  </ProductId>
                  <ProductColor color="lightgreen" />
                  <ProductSize>
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>₹20000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>₹69000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹70</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Promo Discount</SummaryItemText>
              <SummaryItemPrice>-₹9070</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>₹60000</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>

          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
