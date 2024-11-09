import { Container, Col, Row, Button } from "react-bootstrap";
import React from "react";
import {
  useGudGudiStore,
  useLoginStore,
  useSecondGame,
  useGameStore,
} from "../../../../states/store";
import styles from "../../gudigudigame.module.css";

const RightSideCoins = () => {
  const { coinValue, setCoinValue } = useGudGudiStore();
  return (
    <Col md={2} className={styles.sideCoins}>
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(500);
        }}
        className={
          coinValue == 500
            ? `${styles.coin500Btn} ${styles.coinButtons} active`
            : `${styles.coin500Btn} ${styles.coinButtons}`
        }
      ></Button>
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(1000);
        }}
        className={
          coinValue == 1000
            ? `${styles.coin1000Btn} ${styles.coinButtons} active`
            : `${styles.coin1000Btn} ${styles.coinButtons}`
        }
      ></Button>
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(5000);
        }}
        className={
          coinValue == 5000
            ? `${styles.coin5000Btn} ${styles.coinButtons} active`
            : `${styles.coin5000Btn} ${styles.coinButtons}`
        }
      ></Button>
    </Col>
  );
};

export default RightSideCoins;
