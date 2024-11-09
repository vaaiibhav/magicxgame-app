import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useGudGudiStore, useGameStore } from "../../../../states/store";
import styles from "../../gudigudigame.module.css";

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
    <Col md={2} className={`${styles.sideButtons} ${styles.leftActionBtns}`}>
      <Button
        variant="danger"
        onClick={cancelAllBtn}
        className={`${styles.cancelAllBtn} ${styles.actionBtns}`}
      ></Button>
      <Button
        variant="danger"
        className={`${styles.specificCancelBtn} ${styles.actionBtns}`}
        onClick={specificCancelBtn}
      ></Button>
      <Button
        variant="danger"
        onClick={takeBtn}
        className={
          blinkTake
            ? `${styles.takeBtn} ${styles.actionBtns} ${styles.actionBtnsBlink}`
            : `${styles.takeBtn} ${styles.actionBtns}`
        }
      ></Button>
    </Col>
  );
};

export default LeftSideButtons;
