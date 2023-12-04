import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useGudGudiStore, useGameStore } from "../../../../states/store";
import coinAudio from "../../../../assets/Audio/coinAudio.mp3";

const TableCenterRow = () => {
  const { setServerMessage, allowBets, timer } = useGameStore();
  const { slotsBets, setSlotsBets, points, coinValue, winDiceObj } =
    useGudGudiStore();
  const slot1 = [0, 1, 6, 8, 4, 3, 1, 0, 1, 1];
  const betOnSlot = (betonSlotNo) => {
    if (points < coinValue) return setServerMessage("Not Enough Coins");
    if (!allowBets) return setServerMessage("Times UP!");
    new Audio(coinAudio).play();
    setSlotsBets(betonSlotNo);
  };
  return (
    <Col md={8} className="tableAboveRow dontSelect">
      <div className="tableSlot " onClick={() => betOnSlot("slot0Bet")}>
        <label className="slot1Bet">{slotsBets.slot0Bet}</label>
        <label className="slot1Logo slotLogo">&nbsp;</label>{" "}
        <div className="slot1last10">
          {slot1.map((last, index) => (
            <label key={index} className="lastwinns">
              {" "}
              {last > 0 ? last : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className="tableSlot" onClick={() => betOnSlot("slot1Bet")}>
        {" "}
        <label className="slot1Bet">{slotsBets.slot1Bet}</label>
        <label className="slot2Logo slotLogo">&nbsp;</label>{" "}
        <div className="slot1last10">
          {slot1.map((last, index) => (
            <label key={index} className="lastwinns">
              {" "}
              {last > 0 ? last : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className="tableSlot" onClick={() => betOnSlot("slot2Bet")}>
        {" "}
        <label className="slot1Bet">{slotsBets.slot2Bet}</label>
        <label className="slot3Logo slotLogo">&nbsp;</label>{" "}
        <div className="slot1last10">
          {slot1.map((last, index) => (
            <label key={index} className="lastwinns">
              {" "}
              {last > 0 ? last : "X"}
            </label>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default TableCenterRow;
