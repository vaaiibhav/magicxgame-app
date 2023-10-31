import React from "react";
import { Button, Image } from "react-bootstrap";

const RightTableDisplay = () => {
  return (
    <div className="rightTableDisplay">
      <RightTableCoins />
      <RightTableButtons />
    </div>
  );
};

const RightTableCoins = () => (
  <div className="rightTableCoins">
    {" "}
    <Button>10</Button>
    <Button>50</Button>
    <Button>100</Button>
  </div>
);
const RightTableButtons = () => (
  <div className="rightTableButtons">
    <Button>Cancel ALL</Button>
    <Button>Specific Cancel</Button>
    <Button>TAKE</Button>
  </div>
);
export default RightTableDisplay;
