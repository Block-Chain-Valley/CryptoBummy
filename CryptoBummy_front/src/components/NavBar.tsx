import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

function NavBar() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
    chainId: 1001,
  });
  const { disconnect } = useDisconnect();

  return (
    <Wrap>
      <Link to="/">Home</Link>

      <Link to="/minting">minting</Link>

      <Link to="/cheering">cheering</Link>

      <Link to="/invite">invite</Link>
      {isConnected ? (
        <div>
          <button onClick={() => disconnect()}>disconnect</button>
        </div>
      ) : (
        <button onClick={() => connect()}>connect</button>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export default NavBar;
