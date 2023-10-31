import React from "react";
import LeftTableDisplay from "./LeftTableDisplay";
import TableDisplay from "./TableDisplay";
import RightTableDisplay from "./RightTableDisplay";
import "./GudGudiGame.css";
const CenterDisplay = () => {
  return (
    <div className="centerDisplay">
      <LeftTableDisplay />
      <TableDisplay />
      <RightTableDisplay />
    </div>
  );
};

export default CenterDisplay;
