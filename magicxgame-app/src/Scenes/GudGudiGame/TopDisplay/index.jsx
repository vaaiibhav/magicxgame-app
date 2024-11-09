import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import TopDisplayTopRow from "./TopDisplayTopRow";
import styles from "../gudigudigame.module.css";

const TopDisplay = () => {
  return (
    <Row className={styles.topDisplay}>
      <TopDisplayTopRow />
      <Row className={styles.topDisplayBottomRow}>&nbsp;</Row>
    </Row>
  );
};

export default TopDisplay;
