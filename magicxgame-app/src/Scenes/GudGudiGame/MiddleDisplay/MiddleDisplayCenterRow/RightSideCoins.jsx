import { Container, Col, Row, Button } from "react-bootstrap";
import React from "react";

const RightSideCoins = () => {
  return (
    <Col md={2} className="sideCoins">
      <Button variant="warning" className="coin500Btn coinButtons"></Button>
      <Button variant="warning" className="coin1000Btn coinButtons"></Button>
      <Button variant="warning" className="coin5000Btn coinButtons"></Button>
    </Col>
  );
};

export default RightSideCoins;
