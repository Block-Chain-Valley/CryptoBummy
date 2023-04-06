import { ethers } from "ethers";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import { Chain } from "wagmi";

export const baobab = {
  id: 1001,
  name: "Baobab",
  network: "baobab",
  nativeCurrency: {
    decimals: 18,
    name: "Baobab Klay",
    symbol: "BAOB",
  },
  rpcUrls: {
    public: { http: ["https://node-api.klaytnbaobab.com"] },
    default: { http: ["https://node-api.klaytnbaobab.com"] },
  },
  blockExplorers: {
    klaytnscope: {
      name: "Baobab Scope",
      url: "https://baobab.scope.klaytn.com",
    },
    default: { name: "Baobab Scope", url: "https://baobab.scope.klaytn.com" },
  },
  contracts: {
    multicall3: {
      address: "0x4D8fc1453a0F359e99c9675954e656D80d996Fb3",
      blockCreated: 33_521,
    },
  },
} as const satisfies Chain;

function NavBar() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    //connector: new InjectedConnector(),
    chainId: baobab.id,
  });
  const { disconnect } = useDisconnect();
  /*
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState<boolean>(false);


  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        const accounts = await provider.listAccounts();
        setAccounts(accounts);
        setIsConnected(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const disconnectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setProvider(null);
        setAccounts([]);
        setIsConnected(false);
      } catch (error) {
        console.error(error);
      }
    }
  };
  */
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
