import React from "react";
import styled from "styled-components";
import Cheering1 from "../../public/cheering1.png";
import Home1 from "../../public/home1.png";
function Cheering() {
  function cheer() {
    alert("cheer");
  }
  return (
    <Wrap>
      <StyledDescription>
        <StyledTitle>Cheering</StyledTitle>
        <p>버미를 응원하면 새로운 버미를 만들 수 있습니다.</p>
        <StyledCheerButton onClick={() => cheer()}>
          버미 응원하기
        </StyledCheerButton>

        <CheeringBox>
          <StyledBummy>
            <StyledBummyImg src={Home1} alt="home1" />
          </StyledBummy>
          <div>+</div>
          <StyledBummy>
            <StyledBummyImg src={Home1} alt="home1" />
          </StyledBummy>
        </CheeringBox>
      </StyledDescription>
      <img src={Cheering1} alt="home1" />
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
const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 50px;
`;
const StyledTitle = styled.h1`
  font-weight: 800;
  font-size: 56px;
  line-height: 120%;
  letter-spacing: -0.04em;
  color: #000000;
`;
const CheeringBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StyledCheerButton = styled.button`
  width: 300px;
  height: 50px;
`;
const StyledBummy = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
`;
const StyledBummyImg = styled.img`
  width: 100px;
  height: 100px;
`;
export default Cheering;
