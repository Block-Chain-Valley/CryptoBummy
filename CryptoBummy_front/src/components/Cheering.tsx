import React from "react";
import styled from "styled-components";
import Cheering1 from "../../public/cheering1.png";

function Cheering() {
  return (
    <Wrap>
      <StyledDescription>
        <StyledTitle>Cheering</StyledTitle>
        <p>버미를 응원하면 새로운 버미를 만들 수 있습니다.</p>
        <StyledCheerButton>버미 응원하기</StyledCheerButton>
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
const StyledCheerButton = styled.button`
  width: 300px;
  height: 50px;
`;
export default Cheering;
