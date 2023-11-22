import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useGameStore, useGudGudiStore } from "../../../../states/store";
const RightSideButtons = () => {
  const { setBetDouble, setPreviousBets } = useGudGudiStore();
  const doubleBets = () => {
    console.log("doubleBets:");
    setBetDouble();
  };
  const previousBet = () => {
    setPreviousBets();
  };
  return (
    <Col md={2} className="sideButtons rightActionBtns">
      <Button
        variant="danger"
        onClick={previousBet}
        className="previousBetBtn actionBtns"
      ></Button>
      <Button
        variant="danger"
        onClick={doubleBets}
        className="betDoubleBtn actionBtns"
      ></Button>
      <Button variant="danger" className="betOkBtn actionBtns"></Button>
    </Col>
  );
};

export default RightSideButtons;
