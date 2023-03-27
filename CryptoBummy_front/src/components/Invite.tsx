import React from "react";
import styled from "styled-components";
import Invite1 from "../../public/invite1.png";
import Home1 from "../../public/home1.png";

function Invite() {
  function invite() {
    alert("invite");
  }
  return (
    <Wrap>
      <img src={Invite1} alt="home1" />
      <StyledDescription>
        <StyledTitle>Invite Other Bummy</StyledTitle>
        <p>응원에 성공했다면 다른 버미를 새로 초대할 수 있습니다.</p>
        <StyledInviteButton onClick={() => invite()}>
          응원하기
        </StyledInviteButton>

        <div>새로운 버미</div>
        <StyledBummy>
          <StyledBummyImg src={Home1} alt="home1" />
        </StyledBummy>
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
const StyledInviteButton = styled.button`
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
export default Invite;
