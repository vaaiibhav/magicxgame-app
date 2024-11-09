import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useGudGudiStore, useGameStore } from "../../../../states/store";
import coinAudio from "../../../../assets/Audio/coinAudio.mp3";
import styles from "../../gudigudigame.module.css";
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
    <Col md={8} className={`${styles.tableBelowRow} ${styles.dontSelect}`}>
      <div className={styles.tableSlot} onClick={() => betOnSlot("slot3Bet")}>
        <label className={styles.slot1Bet} draggable="false">
          {slotsBets.slot3Bet}
        </label>
        <label className={`${styles.slot4Logo} ${styles.slotLogo}`}>
          &nbsp;
        </label>
        <div className={styles.slot1last10}>
          {lastTenValues.map((last, index) => (
            <label
              key={index}
              className={
                last.hasGoldenDice
                  ? `${styles.lastGoldwinns}`
                  : `${styles.lastwinns}`
              }
            >
              {" "}
              {last.slot3Winning > 0 ? last.slot3Winning : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className={styles.tableSlot} onClick={() => betOnSlot("slot4Bet")}>
        {" "}
        <label className={styles.slot1Bet}> {slotsBets.slot4Bet}</label>
        <label className={`${styles.slot5Logo} ${styles.slotLogo}`}>
          &nbsp;
        </label>{" "}
        <div className={styles.slot1last10}>
          {lastTenValues.map((last, index) => (
            <label
              key={index}
              className={
                last.hasGoldenDice
                  ? `${styles.lastGoldwinns}`
                  : `${styles.lastwinns}`
              }
            >
              {" "}
              {last.slot4Winning > 0 ? last.slot4Winning : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className={styles.tableSlot} onClick={() => betOnSlot("slot5Bet")}>
        {" "}
        <label className={styles.slot1Bet}>{slotsBets.slot5Bet}</label>
        <label className={`${styles.slot6Logo} ${styles.slotLogo}`}>
          &nbsp;
        </label>{" "}
        <div className={styles.slot1last10}>
          {lastTenValues.map((last, index) => (
            <label
              key={index}
              className={
                last.hasGoldenDice
                  ? `${styles.lastGoldwinns}`
                  : `${styles.lastwinns}`
              }
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
