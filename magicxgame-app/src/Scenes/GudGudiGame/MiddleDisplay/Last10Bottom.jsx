import React, { useEffect, useState } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import BottomWinningNumbers from "./BottomWinningNumbers";
import styles from "../gudigudigame.module.css";

const Last10Bottom = (props) => {
  const { lastTenValues } = props;
  let SingleLast10 = [];
  const convertedLast10 = () => {
    try {
      // Ensure lastTenValues is defined and has at least one element
      let convertedLast1 = [];
      let winsForSlots = [
        lastTenValues[0].slot0Winning,
        lastTenValues[0].slot1Winning,
        lastTenValues[0].slot2Winning,
        lastTenValues[0].slot3Winning,
        lastTenValues[0].slot4Winning,
        lastTenValues[0].slot5Winning,
      ];

      // Loop through winsForSlots to populate convertedLast1 array
      winsForSlots.forEach((wins, index) => {
        for (let i = 0; i < wins; i++) {
          convertedLast1.push(index);
        }
      });
      return convertedLast1;
    } catch (error) {
      console.error("Error in convertedLast10:", error);
      return []; // Return an empty array if an error occurs
    }
  };
  let counterLast10 = 0;
  useEffect(() => {
    SingleLast10 = convertedLast10();
    counterLast10++;
  }, [lastTenValues]);
  return (
    <Row className={`${styles.middleDisplayBottomRow} ${styles.dontSelect}`}>
      <Col>
        {SingleLast10.map((singleLast10, index) => (
          <BottomWinningNumbers
            key={index}
            imageToDisplay={singleLast10}
            hasGoldenDice={lastTenValues[0]?.hasGoldenDice}
          />
        ))}
      </Col>
    </Row>
  );
};

export default Last10Bottom;
