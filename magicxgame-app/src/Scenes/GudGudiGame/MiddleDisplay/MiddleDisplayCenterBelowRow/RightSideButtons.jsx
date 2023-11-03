import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const RightSideButtons = () => {
  return (
    <Col md={2} className="sideButtons rightActionBtns">
      <Button variant="danger" className="previousBetBtn actionBtns"></Button>
      <Button variant="danger" className="betDoubleBtn actionBtns"></Button>
      <Button variant="danger" className="betOkBtn actionBtns"></Button>
    </Col>
  );
};

export default RightSideButtons;
