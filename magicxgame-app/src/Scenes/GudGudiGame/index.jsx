import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./GudGudiGame.css";
import TopDisplay from "./TopDisplay";
import MiddleDisplay from "./MiddleDisplay";
import BottomDisplay from "./BottomDisplay";
import useSocketManager from "../../socket/useSocketManager";

const GudGudiGame = () => {
  const socketManager = useSocketManager();

  return (
    <Container fluid className="gameLayout">
      <TopDisplay />
      <MiddleDisplay />
      <BottomDisplay />
    </Container>
  );
};

export default GudGudiGame;
