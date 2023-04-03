import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAccount } from "wagmi";

function Home2() {
  const { address, isConnected } = useAccount();

  return (
    <div>
      <h1>Home2</h1>

      <Outlet />
      <Link to={`/Home2/${address}`}>Home3</Link>
    </div>
  );
}

export default Home2;
