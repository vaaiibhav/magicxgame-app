import React from "react";
import { Image } from "react-bootstrap";
import diceImages from "../../../assets/Game1";

const BottomWinningNumbers = (props) => {
  const { hasGoldenDice, imageToDisplay } = props;
  let winImage;
  switch (imageToDisplay) {
    case 0:
      winImage = diceImages.spades;
      break;
    case 1:
      winImage = diceImages.crowns;
      break;
    case 2:
      winImage = diceImages.hearts;
      break;
    case 3:
      winImage = diceImages.diamonds;
      break;
    case 4:
      winImage = diceImages.flags;
      break;
    case 5:
      winImage = diceImages.clubs;
      break;
    default:
      break;
  }
  return (
    <Image
      className="dontSelect bottomWinningNumberslast10"
      src={winImage}
      rounded
      style={{
        boxShadow: hasGoldenDice
          ? "3px 3px  gold,4px 4px black"
          : "3px 3px  white,4px 4px black",
        background: hasGoldenDice ? "gold" : "white",
        border: "black 1px solid",
      }}
    />
  );
};

export default BottomWinningNumbers;
