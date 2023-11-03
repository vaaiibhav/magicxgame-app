import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const LeftSideButtons = () => {
  return (
    <Col md={2} className="sideButtons leftActionBtns">
      <Button variant="danger" className="cancelAllBtn actionBtns"></Button>
      <Button
        variant="danger"
        className="specificCancelBtn actionBtns"
      ></Button>
      <Button variant="danger" className="takeBtn actionBtns"></Button>
    </Col>
  );
};

export default LeftSideButtons;
