import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import {
  useGudGudiStore,
  useLoginStore,
  useSecondGame,
  useGameStore,
} from "../../../../states/store";
import styles from "../../gudigudigame.module.css";

const LeftSideCoins = () => {
  const { coinValue, setCoinValue, points } = useGudGudiStore();

  return (
    <Col md={2} className={styles.sideCoins}>
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(10);
        }}
        className={
          coinValue == 10
            ? `${styles.coin10Btn} ${styles.coinButtons} active`
            : `${styles.coin10Btn} ${styles.coinButtons}`
        }
      ></Button>
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(50);
        }}
        className={
          coinValue == 50
            ? `${styles.coin50Btn} ${styles.coinButtons} active`
            : `${styles.coin50Btn} ${styles.coinButtons}`
        }
      ></Button>
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(100);
        }}
        className={
          coinValue == 100
            ? `${styles.coin100Btn} ${styles.coinButtons} active`
            : `${styles.coin100Btn} ${styles.coinButtons}`
        }
      ></Button>
    </Col>
  );
};

export default LeftSideCoins;
