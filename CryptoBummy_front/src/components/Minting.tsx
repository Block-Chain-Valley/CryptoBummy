import React from "react";
import styled from "styled-components";
import Minting1 from "../../public/minting1.png";

function Minting() {
  return (
    <Wrap>
      <StyledDescription>
        <h1>What is CryptoBummy?</h1>
        <p>
          CryptoBummy is a collection of 10,000 unique NFTs on the Ethereum
          blockchain. Each CryptoBummy is a unique combination of 5 traits:
        </p>
      </StyledDescription>
      <img src={Minting1} alt="home1" />
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

export default Minting;
