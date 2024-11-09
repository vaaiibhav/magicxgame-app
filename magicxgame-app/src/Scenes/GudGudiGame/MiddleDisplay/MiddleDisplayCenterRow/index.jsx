import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import LeftSideCoins from "./LeftSideCoins";
import RightSideCoins from "./RightSideCoins";
import TableCenterRow from "./TableCenterRow";
import styles from "../../gudigudigame.module.css";
const MiddleDisplayCenterRow = () => {
  return (
    <Row className={styles.middleDisplayCenterRow}>
      <LeftSideCoins />
      <TableCenterRow />
      <RightSideCoins />
    </Row>
  );
};

export default MiddleDisplayCenterRow;
