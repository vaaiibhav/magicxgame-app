import React from "react";
import TopDisplays from "./TopDisplays";
import CenterDisplay from "./CenterDisplay";
import BottomDisplay from "./BottomDisplay";

const GudGudiGame = () => {
  return (
    <div className="m-2 gameLayout" style={{ height: "100%" }}>
      <TopDisplays />
      <CenterDisplay />
      <BottomDisplay />
    </div>
  );
};

export default GudGudiGame;
