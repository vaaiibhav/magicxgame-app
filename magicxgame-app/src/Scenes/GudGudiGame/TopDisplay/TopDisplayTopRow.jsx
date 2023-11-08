import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useGudGudiStore, useGameStore } from "../../../states/store.js";
const TopDisplayTopRow = () => {
  const { balance, winning, gameTime, gameID } = useGudGudiStore();
  const { timer } = useGameStore();

  return (
    <Row className="topDisplayTopRow">
      <Col md={2} className="pointsFrame topDisplayTopRowFrame">
        {balance}
      </Col>
      <Col md={2} className="timerFrame topDisplayTopRowFrame">
        {"00:" + timer}
      </Col>
      <Col md={2} className="emptyFrame topDisplayTopRowFrame"></Col>
      <Col md={2} className="winningFrame topDisplayTopRowFrame">
        {winning}
      </Col>
      <Col md={2} className="timeFrame topDisplayTopRowFrame">
        {gameTime}
      </Col>
      <Col md={2} className="gameIDFrame topDisplayTopRowFrame">
        {gameID}
      </Col>
    </Row>
  );
};

export default TopDisplayTopRow;
