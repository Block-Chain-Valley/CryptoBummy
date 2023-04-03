import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Cheering from "./components/Cheering";
import Home from "./components/Home";
import Invite from "./components/Invite";
import Minting from "./components/Minting";
import NavBar from "./components/NavBar";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import Home2 from "./components/Home2";
import UserHome from "./components/UserHome";

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
