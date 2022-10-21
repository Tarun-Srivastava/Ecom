import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-image: url("Images/Register_BG.jpeg"); */
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 40px;
  background-image: linear-gradient(rgba(69, 69, 69, 0.3), rgba(69, 69, 69, 0.8));
  border-radius: 4px;
  ${mobile({width:"75%"})}
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 2em;
`;

const Agreement = styled.span`
  display: block;
  font-size: 12px;
  margin: 15px 0px;
`;
const Button = styled.button`
  width: 99%;
  border: none;
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

const Register = () => {
  return (
    //autoPlay="autoplay"
     <React.Fragment>
      <Video autoPlay="autoplay"  pause muted>
        <source src="Videos/BG3.mp4" type="video/mp4" />
      </Video>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="FirstName" />
            <Input placeholder="LastName" />
            <Input placeholder="UserName" />
            <Input placeholder="e-mail" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
          </Form>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Wrapper>
      </Container>
     </React.Fragment>
  );
};

export default Register;
