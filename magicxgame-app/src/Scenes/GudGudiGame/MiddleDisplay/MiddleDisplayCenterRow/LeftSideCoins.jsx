import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import {
  useGudGudiStore,
  useLoginStore,
  useSecondGame,
  useGameStore,
} from "../../../../states/store";

const LeftSideCoins = () => {
  const { coinValue, setCoinValue, points } = useGudGudiStore();

  return (
    <Col md={2} className="sideCoins">
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(10);
        }}
        className={
          coinValue == 10
            ? "coin10Btn coinButtons active"
            : "coin10Btn coinButtons"
        }
      ></Button>
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(50);
        }}
        className={
          coinValue == 50
            ? "coin50Btn coinButtons active"
            : "coin50Btn coinButtons"
        }
      ></Button>
      <Button
        variant="warning"
        onClick={() => {
          setCoinValue(100);
        }}
        className={
          coinValue == 100
            ? "coin100Btn coinButtons active"
            : "coin100Btn coinButtons"
        }
      ></Button>
    </Col>
  );
};

export default LeftSideCoins;
