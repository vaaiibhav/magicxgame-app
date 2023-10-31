import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const gotoMenu = () => {
    navigate("/game-menu");
  };
  return (
    <div
      style={{ backgroundColor: "#191f45", height: "100vh", width: "100vw" }}
    >
      LOgin
      <Button onClick={gotoMenu}>Login In</Button>
    </div>
  );
};

export default Login;
