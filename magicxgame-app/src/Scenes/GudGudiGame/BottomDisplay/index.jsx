import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  useGudGudiStore,
  useGameStore,
  useLoginStore,
} from "../../../states/store.js";
import { useNavigate } from "react-router-dom";
const BottomDisplay = () => {
  const { betTotal } = useGudGudiStore();
  const { serverMessage } = useGameStore();
  const navigateOnExit = useNavigate();
  const exittoMenu = () => {
    navigateOnExit("/game-menu");
  };
  const BetTotal = () => (
    <label className="betTotal bottomImageFrame">{betTotal}</label>
  );
  const BetMessages = () => (
    <label className="betMessages bottomImageFrame">{serverMessage}</label>
  );
  const ExitBtn = () => (
    <Button
      variant="danger"
      onClick={exittoMenu}
      className="exitBtn bottomImageFrame"
    ></Button>
  );
  return (
    <Row className="bottomDisplay dontSelect">
      <Row className="bottomDisplayBottomRow">
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
