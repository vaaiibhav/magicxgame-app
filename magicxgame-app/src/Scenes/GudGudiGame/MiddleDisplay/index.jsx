import React, { useState } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import MiddleDisplayCenterRow from "./MiddleDisplayCenterRow";
import MiddleDisplayCenterBelowRow from "./MiddleDisplayCenterBelowRow";
import WinningAnimation from "./WinningAnimation";
import { useGameStore, useGudGudiStore } from "../../../states/store";
import Last10Bottom from "./Last10Bottom";
const MiddleDisplay = () => {
  const { timer } = useGameStore();
  const { lastTenValues } = useGudGudiStore();

  // const [springs1, api] = useSpring(() => ({
  //   from: { y: "0%", opacity: 0 },
  //   to: { y: "300%", opacity: 1 },
  //   config: { duration: 2000 },
  // }));

  return (
    <Row className="middleDisplay">
      <WinningAnimation lastTenValues={lastTenValues} timer={timer} />
      <Row className="middleDisplayTopRow"></Row>
      <MiddleDisplayCenterRow />
      <MiddleDisplayCenterBelowRow />
      <Last10Bottom lastTenValues={lastTenValues} timer={timer} />
    </Row>
  );
};

export default MiddleDisplay;
