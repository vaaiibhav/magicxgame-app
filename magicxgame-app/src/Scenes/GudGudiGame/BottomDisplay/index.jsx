import React from "react";
import { Button, Col, Row } from "react-bootstrap";
const BottomDisplay = () => {
  const BetTotal = () => (
    <label className="betTotal bottomImageFrame">4000</label>
  );
  const BetMessages = () => (
    <label className="betMessages bottomImageFrame">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
      eiusasfasdasf
    </label>
  );
  const ExitBtn = () => (
    <Button variant="danger" className="exitBtn bottomImageFrame"></Button>
  );
  return (
    <Row className="bottomDisplay">
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
