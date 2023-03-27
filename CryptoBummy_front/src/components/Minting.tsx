import React from "react";
import styled from "styled-components";
import Minting1 from "../../public/minting1.png";
import Home1 from "../../public/home1.png";

function Minting() {
  function mint() {
    alert("mint");
  }
  return (
    <Wrap>
      <img src={Minting1} alt="home1" />
      <StyledDescription>
        <StyledTitle>Minting</StyledTitle>
        <StyledMintButton onClick={() => mint()}>
          버미 민팅하기
        </StyledMintButton>
        <StyledBummyBox>
          <StyledBummy>
            <StyledBummyImg src={Home1} alt="home1" />
          </StyledBummy>
        </StyledBummyBox>
      </StyledDescription>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 100px;
`;

const StyledTitle = styled.h1`
  font-weight: 800;
  font-size: 56px;
  line-height: 120%;
  letter-spacing: -0.04em;
  color: #000000;
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 50px;
`;

const StyledMintButton = styled.button`
  width: 300px;
  height: 50px;
`;

const StyledBummyBox = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  margin-top: 20px;
`;

const StyledBummy = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
const StyledBummyImg = styled.img`
  width: 100px;
  height: 100px;
`;

export default Minting;
