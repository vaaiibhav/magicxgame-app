import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import TopDisplayTopRow from "./TopDisplayTopRow";
const TopDisplay = () => {
  return (
    <Row className="topDisplay">
      <TopDisplayTopRow />
      <Row className="topDisplayBottomRow">&nbsp;</Row>
    </Row>
  );
};

export default TopDisplay;
