import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  useGudGudiStore,
  useGameStore,
  useLoginStore,
} from "../../../states/store.js";
import Timestamp from "react-timestamp";
const TopDisplayTopRow = () => {
  const { winning, points } = useGudGudiStore();
  const { gameDateTime, gameID, timer } = useGameStore();
  return (
    <Row className="topDisplayTopRow">
      <Col md={2} className="pointsFrame dontSelect topDisplayTopRowFrame">
        {points ? points : 0}
      </Col>
      <Col md={2} className="timerFrame dontSelect topDisplayTopRowFrame">
        {"00:" + timer}
      </Col>
      <Col md={2} className="emptyFrame dontSelect topDisplayTopRowFrame"></Col>
      <Col md={2} className="winningFrame dontSelect topDisplayTopRowFrame">
        {winning > 0 ? winning : "-"}
      </Col>
      <Col md={2} className="timeFrame dontSelect topDisplayTopRowFrame">
        <Timestamp date={gameDateTime} />
      </Col>
      <Col md={2} className="gameIDFrame dontSelect topDisplayTopRowFrame">
        {gameID ? gameID : 0}
      </Col>
    </Row>
  );
};

export default TopDisplayTopRow;
