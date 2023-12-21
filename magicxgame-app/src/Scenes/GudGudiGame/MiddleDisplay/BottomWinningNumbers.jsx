import React from "react";
import { Image } from "react-bootstrap";
import diceImages from "../../../assets/Game1";

const BottomWinningNumbers = (props) => {
  let winImage;
  switch (props.imageToDisplay) {
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
    />
  );
};

export default BottomWinningNumbers;
