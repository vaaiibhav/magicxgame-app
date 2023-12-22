import React, { useState } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import diceImages from "../../../assets/Game1";
const WinningAnimation = (props) => {
  let winImage = diceImages.spades;
  const { timer } = props;
  if (timer === 0) animateStart();
  const [animationStarted, setAnimationStarted] = useState(false);
  const [scope, animate] = useAnimate();
  const animateStart = async () => {
    console.log("animateStart:", animationStarted);
    setAnimationStarted(true);
    await animate(
      "#winDiceDiv",
      { alignItems: "center" },
      { duration: 12, type: "spring", stiffness: 50 }
    );
    await animate("#winDice1", {
      transform: "translateY(100%)",
      rotate: 240,
    });
    setAnimationStarted(false);
    console.log("animateEnd:", animationStarted);
  };
  return (
    <AnimatePresence>
      <motion.div
        key="batch1"
        onClick={animateStart}
        initial={{ opacity: 0, justifyContent: "center" }}
        animate={{
          alignItems: "center",
          justifyContent: "center",
          opacity: 1,
          width: "100%",
        }}
        ref={scope}
        style={{
          position: "absolute",
          top: 0,
          height: "100%",
          display: "flex", // Use flexbox
          alignItems: "flex-start", // Align items to the top
          background: "transparent",
        }}
      >
        <Row>
          <Col></Col>
          <Col>
            <motion.div
              style={{
                display: "flex",
                alignItems: "flex-start",
                height: "100%",
              }}
              id="winDiceDiv"
            >
              <motion.img
                className="dontSelect bottomWinningNumberslast10"
                id="winDice1"
                src={winImage}
              />
              <motion.img
                id="winDice2"
                className="dontSelect bottomWinningNumberslast10"
                src={winImage}
              />
              <motion.img
                id="winDice3"
                className="dontSelect bottomWinningNumberslast10"
                src={winImage}
              />
              <motion.img
                id="winDice4"
                className="dontSelect bottomWinningNumberslast10"
                src={winImage}
              />
              <motion.img
                id="winDice5"
                className="dontSelect bottomWinningNumberslast10"
                src={winImage}
              />
              <motion.img
                id="winDice6"
                className="dontSelect bottomWinningNumberslast10"
                src={winImage}
              />
            </motion.div>
          </Col>
          <Col></Col>
        </Row>
      </motion.div>
    </AnimatePresence>
  );
};

export default WinningAnimation;
