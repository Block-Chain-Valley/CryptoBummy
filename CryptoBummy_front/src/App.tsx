import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Cheering from "./components/Cheering";
import Home from "./components/Home";
import Invite from "./components/Invite";
import Minting from "./components/Minting";
import NavBar from "./components/NavBar";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function App() {
  return (
    <WagmiConfig client={client}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
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
