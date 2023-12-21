import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useGudGudiStore, useGameStore } from "../../../../states/store";
import coinAudio from "../../../../assets/Audio/coinAudio.mp3";

const TableCenterRow = () => {
  const { setServerMessage, allowBets, timer } = useGameStore();
  const { slotsBets, setSlotsBets, points, coinValue, lastTenValues } =
    useGudGudiStore();
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
          {lastTenValues.map((last, index) => (
            <label
              key={index}
              className={last.hasGoldenDice ? "lastwinns" : "lastGoldwinns"}
            >
              {" "}
              {last.slot0Winning > 0 ? last.slot0Winning : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className="tableSlot" onClick={() => betOnSlot("slot1Bet")}>
        {" "}
        <label className="slot1Bet">{slotsBets.slot1Bet}</label>
        <label className="slot2Logo slotLogo">&nbsp;</label>{" "}
        <div className="slot1last10">
          {lastTenValues.map((last, index) => (
            <label
              key={index}
              className={last.hasGoldenDice ? "lastwinns" : "lastGoldwinns"}
            >
              {" "}
              {last.slot1Winning > 0 ? last.slot1Winning : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className="tableSlot" onClick={() => betOnSlot("slot2Bet")}>
        {" "}
        <label className="slot1Bet">{slotsBets.slot2Bet}</label>
        <label className="slot3Logo slotLogo">&nbsp;</label>{" "}
        <div className="slot1last10">
          {lastTenValues.map((last, index) => (
            <label
              key={index}
              className={last.hasGoldenDice ? "lastwinns" : "lastGoldwinns"}
            >
              {" "}
              {last.slot2Winning > 0 ? last.slot2Winning : "X"}
            </label>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default TableCenterRow;
