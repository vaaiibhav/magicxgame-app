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
    console.log("animateStart:");
    setAnimationStarted(true);
    await animate(scope.current, { y: "0%", rotate: 0, scale: 1.5 });
    await animate(scope.current, {
      transform: "translateY(100%)",
      rotate: 240,
    });
    setAnimationStarted(false);
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
        transition={{ duration: 12, type: "spring", stiffness: 50 }}
        style={{
          position: "absolute",
          top: 0,
          height: "100%",
          // left: "50%",
          // width: "6%",
          display: "flex", // Use flexbox
          alignItems: "flex-start", // Align items to the top
          // justifyContent: "center", // Center items horizontally
          // height: "13%",
          background: "transparent",
        }}
      >
        <Row>
          <Col></Col>
          <Col>
            <motion.img
              className="dontSelect bottomWinningNumberslast10"
              rounded
              src={winImage}
              initial={{ y: 0 }}
              ref={scope}
            />
            <motion.img
              className="dontSelect bottomWinningNumberslast10"
              rounded
              animate={{ rotate: 180 }}
              transition={{ from: 270, duration: 2 }}
              src={winImage}
            />
            <motion.img
              className="dontSelect bottomWinningNumberslast10"
              rounded
              src={winImage}
            />
            <motion.img
              className="dontSelect bottomWinningNumberslast10"
              rounded
              src={winImage}
            />
            <motion.img
              className="dontSelect bottomWinningNumberslast10"
              rounded
              src={winImage}
            />
            <motion.img
              className="dontSelect bottomWinningNumberslast10"
              rounded
              src={winImage}
            />
          </Col>
          <Col></Col>
        </Row>
      </motion.div>
    </AnimatePresence>
  );
};

export default WinningAnimation;
