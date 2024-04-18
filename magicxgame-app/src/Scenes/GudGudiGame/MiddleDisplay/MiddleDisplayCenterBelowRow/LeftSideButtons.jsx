import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useGudGudiStore, useGameStore } from "../../../../states/store";

const LeftSideButtons = () => {
  const {
    setCancelAllBets,
    setServerMessage,
    setPoints,
    winning,
    points,
    setBlinkTake,
  } = useGudGudiStore();
  const { allowBets, allowSendData, setAllowSendData, blinkTake } =
    useGameStore();

  const cancelAllBtn = () => {
    if (!allowBets) return setServerMessage("Times UP!");
    setCancelAllBets();
  };
  const takeBtn = () => {
    if (!allowBets) return setServerMessage("Times UP!");
    if (!allowSendData) {
      setAllowSendData(!allowSendData);
      setPoints(winning + points);
      setBlinkTake(false);
      setCancelAllBets();
    }
  };
  const specificCancelBtn = () => {
    if (!allowBets) return setServerMessage("Times UP!");
  };

  return (
    <Col md={2} className="sideButtons leftActionBtns">
      <Button
        variant="danger"
        onClick={cancelAllBtn}
        className="cancelAllBtn actionBtns"
      ></Button>
      <Button
        variant="danger"
        className="specificCancelBtn actionBtns"
        onClick={specificCancelBtn}
      ></Button>
      <Button
        variant="danger"
        onClick={takeBtn}
        className={
          blinkTake
            ? "takeBtn actionBtns actionBtnsBlink"
            : "takeBtn actionBtns "
        }
      ></Button>
    </Col>
  );
};

export default LeftSideButtons;
