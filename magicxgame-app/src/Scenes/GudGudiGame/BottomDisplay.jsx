import React from "react";
// import { Button } from "react-bootstrap";
const BottomDisplay = () => {
  return (
    <div className="bottomDisplay">
      <BetTotal />
      <MessageDisplay />
      <Exit />
    </div>
  );
};
const BetTotal = () => <label className="betTotal">5000</label>;
const MessageDisplay = () => <label className="messageDisplay">ASDASD</label>;
const Exit = () => <div className="exit"></div>;
export default BottomDisplay;
