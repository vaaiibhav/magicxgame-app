import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MiddleDisplayCenterRow from "./MiddleDisplayCenterRow";
import MiddleDisplayCenterBelowRow from "./MiddleDisplayCenterBelowRow";
const MiddleDisplay = () => {
  return (
    <Row className="middleDisplay">
      <Row className="middleDisplayTopRow"></Row>
      <MiddleDisplayCenterRow />
      <MiddleDisplayCenterBelowRow />
      <Row className="middleDisplayBottomRow"></Row>
    </Row>
  );
};

export default MiddleDisplay;
