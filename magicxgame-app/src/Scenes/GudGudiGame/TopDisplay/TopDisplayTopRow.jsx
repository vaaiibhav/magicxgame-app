import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const TopDisplayTopRow = () => {
  try {
    const bears = useBearStore((state) => state.bears);
  } catch (error) {
    console.log("error:", error);
  }
  return (
    <Row className="topDisplayTopRow">
      <Col md={2} className="pointsFrame topDisplayTopRowFrame">
        {/* {bears} */}
        16400
      </Col>
      <Col md={2} className="timerFrame topDisplayTopRowFrame">
        00:40
      </Col>
      <Col md={2} className="emptyFrame topDisplayTopRowFrame"></Col>
      <Col md={2} className="winningFrame topDisplayTopRowFrame">
        51000
      </Col>
      <Col md={2} className="timeFrame topDisplayTopRowFrame">
        04-Nov 02:12 PM
      </Col>
      <Col md={2} className="gameIDFrame topDisplayTopRowFrame">
        1451000
      </Col>
    </Row>
  );
};

export default TopDisplayTopRow;
