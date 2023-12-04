import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import MiddleDisplayCenterRow from "./MiddleDisplayCenterRow";
import MiddleDisplayCenterBelowRow from "./MiddleDisplayCenterBelowRow";
import BottomWinningNumbers from "./BottomWinningNumbers";
import { useGameStore, useGudGudiStore } from "../../../states/store";

const MiddleDisplay = () => {
  const { timer } = useGameStore();
  return (
    <Row className="middleDisplay">
      <Row className="middleDisplayTopRow"></Row>
      <MiddleDisplayCenterRow />
      <MiddleDisplayCenterBelowRow />
      <Row className="middleDisplayBottomRow dontSelect">
        <Col>
          <BottomWinningNumbers imageToDisplay={0} />
          <BottomWinningNumbers imageToDisplay={1} />
          <BottomWinningNumbers imageToDisplay={2} />
          <BottomWinningNumbers imageToDisplay={3} />
          <BottomWinningNumbers imageToDisplay={4} />
          <BottomWinningNumbers imageToDisplay={5} />
        </Col>
      </Row>
    </Row>
  );
};

export default MiddleDisplay;
