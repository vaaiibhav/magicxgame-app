import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./GudGudiGame.css";
const TopDisplays = () => {
  return (
    <Container fluid className="topDisplay">
      <label className="pointsFrame displayFrames">50000</label>{" "}
      <label className="timerFrame displayFrames">50000</label>{" "}
      <label className="displayFrames"></label>{" "}
      <label className="displayFrames"></label>{" "}
      <label className="winningFrame displayFrames">50000</label>{" "}
      <label className="timeFrame displayFrames">50000</label>{" "}
      <label className="gameIDFrame displayFrames">50000</label>{" "}
    </Container>
  );
};

export default TopDisplays;
