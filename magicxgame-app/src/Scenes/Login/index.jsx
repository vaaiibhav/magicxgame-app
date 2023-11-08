import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { serverHost, serverPort, serverURL } from "../../constants";
import { Container, Col, Row } from "react-bootstrap";
import { Toaster, toast } from "sonner";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [loginCred, setLoginCred] = useState({
    loginID: "",
    loginPD: "",
  });

  const gotoMenu = async () => {
    try {
      const userLogin = await axios.post(
        serverURL + "/login/login-game",
        loginCred
      );
      console.log("userLogin:", userLogin);
      // navigate("/game-menu");
    } catch (error) {
      console.log("error:", error);
      if (error) toast.error(error?.response?.data?.error);
    }
  };
  return (
    <Container fluid className="bgScreen">
      <Row>
        <Col md={2}></Col>
        <Col
          className="loginModal d-flex justify-content-center align-items-center"
          md={8}
        >
          <form className=" d-flex loginForm  flex-column" onSubmit={gotoMenu}>
            <input
              type="text"
              placeholder="Login ID"
              name="loginID"
              id="loginID"
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
            <Button className="loginBtnBg" type="submit">
              Login
            </Button>
          </form>
        </Col>
        <Col md={2}>
          {" "}
          <Toaster />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
