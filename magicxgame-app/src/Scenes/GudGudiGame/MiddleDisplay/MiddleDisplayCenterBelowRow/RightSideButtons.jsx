import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useGameStore, useGudGudiStore } from "../../../../states/store";
import styles from "../../gudigudigame.module.css";

const RightSideButtons = () => {
  const { setBetDouble, setPreviousBets, slotsBets, betTotal } =
    useGudGudiStore();
  const {
    socketInstance,
    allowBets,
    setServerMessage,
    countDowner,
    setAllowBets,
    allowSendData,
  } = useGameStore();
  const emitGudGudiBets = () => {
    if (!allowSendData) return setServerMessage("Please Take to Proceed");
    if (betTotal > 1) {
      slotsBets.totalBet = betTotal;
      socketInstance.emit("gudGudiBets", slotsBets);
      setAllowBets(false);
      return setServerMessage("Bets Saved!");
    }
    return setServerMessage("No Bets to Save!");
  };
  const doubleBetsBtn = () => {
    if (!allowSendData) return setServerMessage("Please Take to Proceed");
    if (!allowBets) return setServerMessage("Times UP!");
    setBetDouble();
  };
  const previousBetBtn = () => {
    if (!allowSendData) return setServerMessage("Please Take to Proceed");
    if (!allowBets) return setServerMessage("Times UP!");
    setPreviousBets();
  };
  const betOKBtn = () => {
    if (!allowSendData) return setServerMessage("Please Take to Proceed");
    if (!allowBets) return setServerMessage("Times UP!");
    slotsBets.totalBet = betTotal;
    emitGudGudiBets();
    return setServerMessage("Bets Saved!");
  };
  return (
    <Col md={2} className={`${styles.sideButtons} ${styles.rightActionBtns}`}>
      <Button
        variant="danger"
        onClick={previousBetBtn}
        className={`${styles.previousBetBtn} ${styles.actionBtns}`}
      ></Button>
      <Button
        variant="danger"
        onClick={doubleBetsBtn}
        className={`${styles.betDoubleBtn} ${styles.actionBtns}`}
      ></Button>
      <Button
        variant="danger"
        onClick={betOKBtn}
        className={`${styles.betOkBtn} ${styles.actionBtns}`}
      ></Button>
    </Col>
  );
};

export default RightSideButtons;
