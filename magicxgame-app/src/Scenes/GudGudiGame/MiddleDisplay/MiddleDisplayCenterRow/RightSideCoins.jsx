import { Container, Col, Row, Button } from "react-bootstrap";
import React from "react";
import {
  useGudGudiStore,
  useLoginStore,
  useSecondGame,
  useGameStore,
} from "../../../../states/store";
const RightSideCoins = () => {
  const { coinValue, setCoinValue } = useGudGudiStore();
  return (
    <Col md={2} className="sideCoins">
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(500);
        }}
        className={
          coinValue == 500
            ? "coin500Btn coinButtons active"
            : "coin500Btn coinButtons"
        }
      ></Button>
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(1000);
        }}
        className={
          coinValue == 1000
            ? "coin1000Btn coinButtons active"
            : "coin1000Btn coinButtons"
        }
      ></Button>
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(5000);
        }}
        className={
          coinValue == 5000
            ? "coin5000Btn coinButtons active"
            : "coin5000Btn coinButtons"
        }
      ></Button>
    </Col>
  );
};

export default RightSideCoins;
