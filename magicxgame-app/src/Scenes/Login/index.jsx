import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { serverHost, serverPort, serverURL } from "../../constants";
import { Container, Col, Row } from "react-bootstrap";
import { Toaster, toast } from "sonner";
import "./Login.css";
import axios from "axios";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import denyMinus from "../../utils/denyMinus";
import { useLoginStore } from "../../states/store";
import ConnectionManager from "../../socket/ConnectionManager";

const Login = () => {
  const navigate = useNavigate();
  const [loginCred, setLoginCred] = useState({
    loginID: "",
    loginPD: "",
  });
  const { storeToken } = useLoginStore();
  const handle = useFullScreenHandle();
  const gotoMenu = async () => {
    await handle.enter();
    try {
      const userLogin = await axios
        .post(serverURL + "/login/login-game/", loginCred)
        .then((response) => response)
        .catch((error) => error);
      if (userLogin?.data?.token) {
        storeToken(userLogin?.data?.token);
        toast.success("Login Successful");
        localStorage.removeItem("blueFighter.authToken");
        localStorage.setItem("blueFighter.authToken", userLogin?.data?.token);
        navigate("/game-menu");
      }
    } catch (error) {
      console.log("error:", error);
      if (error) toast.error(error?.response?.data?.error);
    }
  };
  return (
    <FullScreen handle={handle}>
      <Container fluid className="bgScreen">
        <Row>
          <Col md={2}></Col>
          <Col
            className="loginModal d-flex justify-content-center align-items-center"
            md={8}
          >
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
              <form className=" d-flex loginForm  flex-column">
                <input
                  type="number"
                  placeholder="Login ID"
                  name="loginID"
                  id="loginID"
                  min="0"
                  onKeyDown={denyMinus}
                  required
                  onChange={(e) => {
                    setLoginCred({ ...loginCred, loginID: e.target.value });
                  }}
                />
                <p></p>
                <input
                  onChange={(e) => {
                    setLoginCred({ ...loginCred, loginPD: e.target.value });
                  }}
                  type="password"
                  required
                  placeholder="Password"
                  name="loginPD"
                  id="loginPD"
                />
                <p></p>
                <Button className="loginBtnBg" onClick={gotoMenu}>
                  Login
                </Button>
              </form>
            </ErrorBoundary>
          </Col>
          <Col md={2}>
            {" "}
            <Toaster />
          </Col>
        </Row>
      </Container>
      <ConnectionManager />
    </FullScreen>
  );
};

export default Login;
