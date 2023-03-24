import React from "react";
import styled from "styled-components";
import Home1 from "../../public/home1.png";
function Home() {
  return (
    <Wrap>
      <StyledDescription>
        <StyledTitle>CryptoBummy?</StyledTitle>
        <StyledDescript>
          "Cryptokitty"를 클론코딩한 블록체인 기반 게임입니다. 사용자는 자신만의
          버미를 만들 수 있습니다. 또한, ‘Cheering’을 통하여 새로운 버미를 만들
          수도 있습니다.
        </StyledDescript>
      </StyledDescription>
      <img src={Home1} alt="home1" />
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

const StyledDescript = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #000000;
`;

export default Home;
