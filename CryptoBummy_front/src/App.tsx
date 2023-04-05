import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Cheering from "./components/Cheering";
import Home from "./components/Home";
import Invite from "./components/Invite";
import Minting from "./components/Minting";
import NavBar from "./components/NavBar";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";

import { publicProvider } from "wagmi/providers/public";

import { getDefaultProvider } from "ethers";
import Home2 from "./components/Home2";
import UserHome from "./components/UserHome";

const { chains, provider, webSocketProvider } = configureChains(
  [
    {
      /** ID in number form */
      id: 1001,
      /** Human-readable name */
      name: "baobab",
      /** Internal network name */
      network: "baobab",
      /** Currency used by chain */
      nativeCurrency: {
        name: "KLAYTN",
        /** 2-6 characters long */
        symbol: "KLAY",
        decimals: 18,
      },
      /** Collection of RPC endpoints */
      rpcUrls: {
        default: {
          http: ["https://public-node-api.klaytnapi.com/v1/baobab"],
        },
        public: {
          http: ["https://public-node-api.klaytnapi.com/v1/baobab"],
        },
      },
      /** Collection of block explorers */

      /** Collection of contracts */

      /** Flag for test networks */
      testnet: true,
    },
  ],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

function App() {
  return (
    <WagmiConfig client={client}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="Home2" element={<Home2 />}>
                <Route path=":userId" element={<UserHome />} />
              </Route>
            </Route>
            <Route path="/minting" element={<Minting />} />
            <Route path="/invite" element={<Invite />} />
            <Route path="/cheering" element={<Cheering />} />
          </Routes>
        </div>
      </BrowserRouter>
    </WagmiConfig>
  );
}

export default App;
