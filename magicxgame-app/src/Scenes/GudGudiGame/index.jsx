import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./GudGudiGame.css";
import TopDisplay from "./TopDisplay";
import MiddleDisplay from "./MiddleDisplay";
import BottomDisplay from "./BottomDisplay";

const GudGudiGame = () => {
  return (
    <Container fluid className="gameLayout">
      <TopDisplay />
      <MiddleDisplay />
      <BottomDisplay />
    </Container>
  );
};

export default GudGudiGame;
