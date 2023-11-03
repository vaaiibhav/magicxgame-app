import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const LeftSideCoins = () => {
  return (
    <Col md={2} className="sideCoins">
      <Button variant="warning" className="coin10Btn coinButtons"></Button>
      <Button variant="warning" className="coin50Btn coinButtons"></Button>
      <Button variant="warning" className="coin100Btn coinButtons"></Button>
    </Col>
  );
};

export default LeftSideCoins;
