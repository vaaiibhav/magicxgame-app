import React from "react";
import { Button, Image } from "react-bootstrap";

const LeftTableDisplay = () => {
  return (
    <div className="leftTableDisplay">
      <LeftTableCoins /> <LeftTableButtons />{" "}
    </div>
  );
};

const LeftTableCoins = () => (
  <div className="leftTableCoins">
    <Button>10</Button>
    <Button>50</Button>
    <Button>100</Button>
  </div>
);
const LeftTableButtons = () => (
  <div className="leftTableButtons">
    <Button>Cancel ALL</Button>
    <Button>Specific Cancel</Button>
    <Button>TAKE</Button>
  </div>
);
export default LeftTableDisplay;
