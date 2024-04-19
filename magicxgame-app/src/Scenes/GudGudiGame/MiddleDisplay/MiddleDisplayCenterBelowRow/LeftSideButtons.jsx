import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useGudGudiStore, useGameStore } from "../../../../states/store";

const LeftSideButtons = () => {
  const {
    setCancelAllBets,
    setPoints,
    _winning,
    setWinning,
    points,
    blinkTake,
    setblinkTake,
  } = useGudGudiStore();
  const { allowBets, allowSendData, setAllowSendData, setServerMessage } =
    useGameStore();

  const cancelAllBtn = () => {
    if (!allowBets) return setServerMessage("Times UP!");
    if (!allowSendData) return setServerMessage("Please Take to Proceed");
    setCancelAllBets();
  };
  const takeBtn = () => {
    if (!allowBets) return setServerMessage("Times UP!");
    if (!allowSendData) {
      setAllowSendData(true);
      setPoints(_winning + points);
      setblinkTake(false);
      setWinning(0);
      setCancelAllBets();
    }
  };
  const specificCancelBtn = () => {
    if (!allowSendData) return setServerMessage("Please Take to Proceed");
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
