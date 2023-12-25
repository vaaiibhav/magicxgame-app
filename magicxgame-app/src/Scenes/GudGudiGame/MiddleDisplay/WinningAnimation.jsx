import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import diceImages from "../../../assets/Game1";
import { useGameStore, useGudGudiStore } from "../../../states/store";

const WinningAnimation = () => {
  const { timer } = useGameStore();
  const { winDiceObj } = useGudGudiStore();
  const [scope, animate] = useAnimate();
  const [animationStarted, setAnimationStarted] = useState(false);

  const winImageSelector = (imageToDisplay) => {
    switch (imageToDisplay) {
      case 0:
        return diceImages.spades;
      case 1:
        return diceImages.crowns;
      case 2:
        return diceImages.hearts;
      case 3:
        return diceImages.diamonds;
      case 4:
        return diceImages.flags;
      case 5:
        return diceImages.clubs;
      default:
        return null; // Default image or handle edge case
    }
  };

  const renderImages = () => {
    let images = [];
    winDiceObj?.diceValues?.forEach((value, index) => {
      for (let i = 0; i < value; i++) {
        images.push(
          <motion.img
            key={`${index}-${i}`}
            style={{
              borderRadius: "20%",
              boxShadow: winDiceObj?.hasGoldenDice
                ? "3px 3px  gold,4px 4px black"
                : "3px 3px  white,4px 4px black",
              background: winDiceObj?.hasGoldenDice ? "gold" : "white",
              border: "black 1px solid",
            }}
            className="dontSelect bottomWinningNumberslast10"
            id={`winDice${index + 1}-${i + 1}`}
            src={winImageSelector(index)}
          />
        );
      }
    });
    return images;
  };

  const animateStart = async () => {
    animationStarted;
    setAnimationStarted(true);
    await animate(
      scope.current,
      { alignItems: "center", width: "50%", opacity: 1 },
      { duration: 2, type: "spring", stiffness: 50 }
    );
    // await animate("#winDice1-1", { x: "-240%", y: "-210%" });
    // await animate("#winDice1-2", { x: "-230%", y: "-230%" });
    // await animate("#winDice1-3", { x: "-220%", y: "-250%" });
    // await animate("#winDice1-4", { x: "-240%", y: "-130%" });
    // await animate("#winDice1-5", { x: "-230%", y: "-120%" });
    // await animate("#winDice1-6", { x: "-220%", y: "-110%" });

    setAnimationStarted(false);
  };

  useEffect(() => {
    if (timer === 1) {
      animateStart();
    }
  }, [timer]);

  return (
    <AnimatePresence>
      <motion.div
        key="batch1"
        onClick={animateStart}
        style={{
          position: "absolute",
          opacity: 0.2,
          top: 0,
          pointerEvents: "none",
          translateX: "50%",
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "transparent",
        }}
        ref={scope}
      >
        {renderImages()}
      </motion.div>
    </AnimatePresence>
  );
};

export default WinningAnimation;
