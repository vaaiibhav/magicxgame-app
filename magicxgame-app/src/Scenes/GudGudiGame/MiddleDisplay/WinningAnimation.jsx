import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import diceImages from "../../../assets/Game1";
import { useGameStore, useGudGudiStore } from "../../../states/store";
import styles from "../gudigudigame.module.css";

const WinningAnimation = () => {
  let images = [];
  // const [animations] = useState(() => images.map(() => useAnimation()));

  const { winDiceObj } = useGudGudiStore();
  const [scope, animate] = useAnimate();
  let imagePlacements = [];
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
    let imagesID = 0;
    console.log("winDiceObj:", winDiceObj);
    winDiceObj?.diceValues?.forEach((value, index) => {
      for (let i = 0; i < value; i++) {
        imagesID++;
        imagePlacements.push(index);
        // if (imagesID === 4) images.push(<p key={`${imagesID} + ${i}`}></p>);
        images.push(
          <motion.img
            key={imagesID}
            style={{
              borderRadius: "20%",
              boxShadow: winDiceObj?.hasGoldenDice
                ? "3px 3px  gold,4px 4px black"
                : "3px 3px  white,4px 4px black",
              background: winDiceObj?.hasGoldenDice ? "gold" : "white",
              border: "black 1px solid",
            }}
            className={`${styles.dontSelect} ${styles.bottomWinningNumberslast10}`}
            id={`winDice${imagesID}`}
            src={winImageSelector(index)}
          />
        );
      }
    });
    return images;
  };
  const gotoEachDicePlace = (goWhere) => {
    let animateTo = {};
    switch (goWhere) {
      case 0:
        animateTo = { x: "-510%", y: "-300%" };
        break;
      case 1:
        animateTo = { x: "-40%", y: "-300%" };
        break;
      case 2:
        animateTo = { x: "420%", y: "-300%" };
        break;
      case 3:
        animateTo = { x: "-510%", y: "300%" };
        break;
      case 4:
        animateTo = { x: "-40%", y: "300%" };
        break;
      case 5:
        animateTo = { x: "420%", y: "300%" };
        break;

      default:
        break;
    }
    return animateTo;
  };

  const animateStart = async () => {
    try {
      await animate(
        scope.current,
        { opacity: 1 },
        { duration: 2, type: "spring", stiffness: 50, delay: 1 }
      );

      await animate("#winDice1", gotoEachDicePlace(imagePlacements[0]));
      await animate("#winDice2", gotoEachDicePlace(imagePlacements[1]));
      await animate("#winDice3", gotoEachDicePlace(imagePlacements[2]));
      await animate("#winDice4", gotoEachDicePlace(imagePlacements[3]));
      await animate("#winDice5", gotoEachDicePlace(imagePlacements[4]));
      await animate("#winDice6", gotoEachDicePlace(imagePlacements[5]));
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    animateStart();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="batch1"
        onClick={animateStart}
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          height: "100%",
          display: "flex",
          gap: "1px",
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
