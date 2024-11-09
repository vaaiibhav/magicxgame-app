import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  useGudGudiStore,
  useGameStore,
  useLoginStore,
} from "../../../states/store.js";
import styles from "../gudigudigame.module.css";
import { useNavigate } from "react-router-dom";
const BottomDisplay = () => {
  const { betTotal } = useGudGudiStore();
  const { serverMessage } = useGameStore();
  const navigateOnExit = useNavigate();
  const exittoMenu = () => {
    navigateOnExit("/game-menu");
  };
  const BetTotal = () => (
    <label className={`${styles.betTotal} ${styles.bottomImageFrame}`}>
      {betTotal}
    </label>
  );
  const BetMessages = () => (
    <label className={`${styles.betMessages} ${styles.bottomImageFrame}`}>
      {serverMessage}
    </label>
  );
  const ExitBtn = () => (
    <Button
      variant="danger"
      onClick={exittoMenu}
      className={`${styles.exitBtn} ${styles.bottomImageFrame}`}
    ></Button>
  );
  return (
    <Row className={`${styles.bottomDisplay} ${styles.dontSelect}`}>
      <Row className={styles.bottomDisplayBottomRow}>
        <Col md={2}>
          <BetTotal />
        </Col>
        <Col md={8}>
          <BetMessages />
        </Col>
        <Col md={2}>
          <ExitBtn />
        </Col>
      </Row>
    </Row>
  );
};

export default BottomDisplay;
