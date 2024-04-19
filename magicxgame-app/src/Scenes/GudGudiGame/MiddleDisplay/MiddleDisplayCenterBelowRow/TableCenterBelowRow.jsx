import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useGudGudiStore, useGameStore } from "../../../../states/store";
import coinAudio from "../../../../assets/Audio/coinAudio.mp3";

const TableCenterBelowRow = () => {
  const { setServerMessage, allowBets, allowSendData } = useGameStore();
  const { slotsBets, setSlotsBets, points, coinValue, lastTenValues } =
    useGudGudiStore();
  const betOnSlot = (betonSlotNo) => {
    if (points < coinValue) return setServerMessage("Not Enough Coins");
    if (!allowSendData) return setServerMessage("Please Take to Proceed");
    if (!allowBets) return setServerMessage("Times UP!");
    new Audio(coinAudio).play();
    setSlotsBets(betonSlotNo);
  };

  return (
    <Col md={8} className="tableBelowRow dontSelect">
      <div className="tableSlot" onClick={() => betOnSlot("slot3Bet")}>
        <label className="slot1Bet" draggable="false">
          {slotsBets.slot3Bet}
        </label>
        <label className="slot4Logo slotLogo">&nbsp;</label>
        <div className="slot1last10">
          {lastTenValues.map((last, index) => (
            <label
              key={index}
              className={last.hasGoldenDice ? "lastGoldwinns" : "lastwinns"}
            >
              {" "}
              {last.slot3Winning > 0 ? last.slot3Winning : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className="tableSlot" onClick={() => betOnSlot("slot4Bet")}>
        {" "}
        <label className="slot1Bet"> {slotsBets.slot4Bet}</label>
        <label className="slot5Logo slotLogo">&nbsp;</label>{" "}
        <div className="slot1last10">
          {lastTenValues.map((last, index) => (
            <label
              key={index}
              className={last.hasGoldenDice ? "lastGoldwinns" : "lastwinns"}
            >
              {" "}
              {last.slot4Winning > 0 ? last.slot4Winning : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className="tableSlot" onClick={() => betOnSlot("slot5Bet")}>
        {" "}
        <label className="slot1Bet">{slotsBets.slot5Bet}</label>
        <label className="slot6Logo slotLogo">&nbsp;</label>{" "}
        <div className="slot1last10">
          {lastTenValues.map((last, index) => (
            <label
              key={index}
              className={last.hasGoldenDice ? "lastGoldwinns" : "lastwinns"}
            >
              {" "}
              {last.slot5Winning > 0 ? last.slot5Winning : "X"}
            </label>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default TableCenterBelowRow;
