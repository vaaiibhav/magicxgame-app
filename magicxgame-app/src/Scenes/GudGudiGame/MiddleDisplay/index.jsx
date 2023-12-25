import React, { useState } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import MiddleDisplayCenterRow from "./MiddleDisplayCenterRow";
import MiddleDisplayCenterBelowRow from "./MiddleDisplayCenterBelowRow";
import WinningAnimation from "./WinningAnimation";
import { useGameStore, useGudGudiStore } from "../../../states/store";
import Last10Bottom from "./Last10Bottom";
const MiddleDisplay = () => {
  const { lastTenValues } = useGudGudiStore();

  return (
    <Row className="middleDisplay">
      <WinningAnimation />
      <Row className="middleDisplayTopRow"></Row>
      <MiddleDisplayCenterRow />
      <MiddleDisplayCenterBelowRow />
      <Last10Bottom lastTenValues={lastTenValues} />
    </Row>
  );
};

export default MiddleDisplay;
