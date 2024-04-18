import React, { useState, useEffect } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import MiddleDisplayCenterRow from "./MiddleDisplayCenterRow";
import MiddleDisplayCenterBelowRow from "./MiddleDisplayCenterBelowRow";
import WinningAnimation from "./WinningAnimation";
import { useGameStore, useGudGudiStore } from "../../../states/store";
import Last10Bottom from "./Last10Bottom";
import diceImages from "../../../assets/Game1";
import {
  motion,
  AnimatePresence,
  useAnimate,
  useAnimation,
} from "framer-motion";

const MiddleDisplay = () => {
  const { timer } = useGameStore();
  const { bell } = diceImages;
  const { lastTenValues } = useGudGudiStore();
  const [scope, animate] = useAnimate();
  const controls = useAnimation();

  useEffect(() => {
    if (timer === 3) {
      // await animate("#bellImg", {});
      controls.start("start");
    }
  }, [timer]);
  const variants = {
    start: (i) => ({
      x: [1, -2, 3, -4, 5],
      rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
      transition: {
        repeat: 5,
        duration: 1,
      },
    }),
    reset: {
      rotate: 0,
    },
  };

  return (
    <Row className="middleDisplay">
      {/* {(timer < 3 || timer > 55) && <WinningAnimation />} */}
      {<WinningAnimation />}
      <motion.img
        id="bellImg"
        src={bell}
        className="bellDisplay"
        variants={variants}
        animate={controls}
      />
      <MiddleDisplayCenterRow />
      <MiddleDisplayCenterBelowRow />
      <Last10Bottom lastTenValues={lastTenValues} />
    </Row>
  );
};

export default MiddleDisplay;
