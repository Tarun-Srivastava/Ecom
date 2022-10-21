import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image:url("Images/Login_BG.jpeg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;


const Wrapper = styled.div`
  width: 30%;
  padding: 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
  border-radius: 4px;
  
  ${mobile({width:"75%"})}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  letter-spacing: 3px;
  background: linear-gradient(271deg,#a0e9ff 50%,#a162e8 60%,#f093b0 70%,#edca85 99%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
const Button = styled.button`
  width: 98.5%;
  border: none;
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 7px;
  color: white;
  background-color: #f76e6e;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  :hover {
    letter-spacing: 2px;
    background-color: #ff2d2d;
  }
  :active{
    transform:translateY(4px);
  }
`;

const Link = styled.a`
    display: block;
    font-size:12px;
    color: #a3a3a3;
    text-decoration: underline;
    cursor: pointer;
    letter-spacing: 2px;
    flex: 1;
    margin: 5px 0px;
    :hover{
        color: #ffffff;
    }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="UserName" />
          <Input placeholder="Password" />
        </Form>
        <Button>CREATE</Button>
        <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
