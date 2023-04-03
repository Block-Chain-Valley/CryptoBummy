import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useAccount } from "wagmi";
import Home1 from "../../public/home1.png";
import getDataAPI from "../api/getData";
import getData1 from "../api/getData1";
import { getEtherData } from "../contract/getEtherData";
function Home() {
  const { address, isConnected } = useAccount();

  function getDatabyPromise() {
    getData1().then((res) => {
      console.log(res);
    });
  }

  async function getData() {
    const res = await getDataAPI.getPosts();
    console.log(res);
  }
  function getEther() {
    getEtherData(address!);
  }

  return (
    <Wrap>
      <StyledDescription>
        <StyledTitle>CryptoBummy</StyledTitle>
        <StyledDescript>
          "Cryptokitty"를 클론코딩한 블록체인 기반 게임입니다. 사용자는 자신만의
          버미를 만들 수 있습니다. 또한, ‘Cheering’을 통하여 새로운 버미를 만들
          수도 있습니다.
        </StyledDescript>

        <button onClick={() => getDatabyPromise()}>getDatabyPromise</button>
        <button onClick={() => getData()}>getData</button>
        <button onClick={() => getEther()}>getEther</button>

        <Link to="/Home2">Home2</Link>

        <Outlet />
      </StyledDescription>
      <StyledHomeImg src={Home1} alt="home1" />
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
const StyledHomeImg = styled.img`
  width: 500px;
`;

export default Home;
