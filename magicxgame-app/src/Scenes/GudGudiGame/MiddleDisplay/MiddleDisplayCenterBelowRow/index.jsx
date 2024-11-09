import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import LeftSideButtons from "./LeftSideButtons";
import RightSideButtons from "./RightSideButtons";
import TableCenterBelowRow from "./TableCenterBelowRow";
import styles from "../../gudigudigame.module.css";
const MiddleDisplayCenterBelowRow = () => {
  return (
    <Row className={styles.middleDisplayCenterBelowRow}>
      <LeftSideButtons />
      <TableCenterBelowRow />
      <RightSideButtons />
    </Row>
  );
};

export default MiddleDisplayCenterBelowRow;
