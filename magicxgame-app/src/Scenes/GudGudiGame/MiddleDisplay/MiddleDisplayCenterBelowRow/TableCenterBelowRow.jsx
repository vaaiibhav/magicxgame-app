import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useGudGudiStore, useGameStore } from "../../../../states/store";
import coinAudio from "../../../../assets/Audio/coinAudio.mp3";
const TableCenterBelowRow = () => {
  const { setServerMessage, allowBets } = useGameStore();
  const { slotsBets, setSlotsBets } = useGudGudiStore();
  const slot1 = [0, 1, 6, 8, 4, 3, 1, 0, 1, 1];
  const betOnSlot = (betonSlotNo) => {
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
          {slot1.map((last, index) => (
            <label key={index} className="lastwinns">
              {" "}
              {last > 0 ? last : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className="tableSlot" onClick={() => betOnSlot("slot4Bet")}>
        {" "}
        <label className="slot1Bet"> {slotsBets.slot4Bet}</label>
        <label className="slot5Logo slotLogo">&nbsp;</label>
        <div className="slot1last10">
          {slot1.map((last, index) => (
            <label key={index} className="lastwinns">
              {" "}
              {last > 0 ? last : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className="tableSlot" onClick={() => betOnSlot("slot5Bet")}>
        {" "}
        <label className="slot1Bet">{slotsBets.slot5Bet}</label>
        <label className="slot6Logo slotLogo">&nbsp;</label>
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

export default TableCenterBelowRow;
