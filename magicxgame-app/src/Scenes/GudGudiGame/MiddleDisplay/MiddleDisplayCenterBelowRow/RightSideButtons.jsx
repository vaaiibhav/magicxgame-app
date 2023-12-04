import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useGameStore, useGudGudiStore } from "../../../../states/store";
const RightSideButtons = () => {
  const { setBetDouble, setPreviousBets } = useGudGudiStore();
  const doubleBetsBtn = () => {
    if (!allowBets) return setServerMessage("Times UP!");
    setBetDouble();
  };
  const previousBetBtn = () => {
    if (!allowBets) return setServerMessage("Times UP!");
    setPreviousBets();
  };
  const betOKBtn = () => {
    if (!allowBets) return setServerMessage("Times UP!");
  };
  return (
    <Col md={2} className="sideButtons rightActionBtns">
      <Button
        variant="danger"
        onClick={previousBetBtn}
        className="previousBetBtn actionBtns"
      ></Button>
      <Button
        variant="danger"
        onClick={doubleBetsBtn}
        className="betDoubleBtn actionBtns"
      ></Button>
      <Button
        variant="danger"
        onClick={betOKBtn}
        className="betOkBtn actionBtns"
      ></Button>
    </Col>
  );
};

export default RightSideButtons;
