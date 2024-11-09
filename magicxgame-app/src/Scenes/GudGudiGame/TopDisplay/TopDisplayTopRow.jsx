import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  useGudGudiStore,
  useGameStore,
  useLoginStore,
} from "../../../states/store.js";
import Timestamp from "react-timestamp";
import styles from "../gudigudigame.module.css";
const TopDisplayTopRow = () => {
  const { _winning, points } = useGudGudiStore();
  const { gameDateTime, gameID, timer } = useGameStore();
  return (
    <Row className={styles.topDisplayTopRow}>
      <Col
        md={2}
        className={`${styles.pointsFrame} ${styles.dontSelect} ${styles.topDisplayTopRowFrame}`}
      >
        {points ? points : 0}
      </Col>
      <Col
        md={2}
        className={`${styles.timerFrame} ${styles.dontSelect} ${styles.topDisplayTopRowFrame}`}
      >
        {"00:" + timer}
      </Col>
      <Col
        md={2}
        className={`${styles.emptyFrame} ${styles.dontSelect} ${styles.topDisplayTopRowFrame}`}
      ></Col>
      <Col
        md={2}
        className={`${styles.winningFrame} ${styles.dontSelect} ${styles.topDisplayTopRowFrame}`}
      >
        {_winning > 0 ? _winning : "-"}
      </Col>
      <Col
        md={2}
        className={`${styles.timeFrame} ${styles.dontSelect} ${styles.topDisplayTopRowFrame}`}
      >
        <Timestamp date={gameDateTime} />
      </Col>
      <Col
        md={2}
        className={`${styles.gameIDFrame} ${styles.dontSelect} ${styles.topDisplayTopRowFrame}`}
      >
        {gameID ? gameID : 0}
      </Col>
    </Row>
  );
};

export default TopDisplayTopRow;
