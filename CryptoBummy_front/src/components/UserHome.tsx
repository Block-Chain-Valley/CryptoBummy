import React from "react";
import { useLocation, useParams } from "react-router-dom";

function UserHome() {
  const { userId } = useParams();
  const location = useLocation();

  return (
    <>
      <div>{userId}</div>
      <div>{location.pathname}</div>
    </>
  );
}

export default UserHome;
