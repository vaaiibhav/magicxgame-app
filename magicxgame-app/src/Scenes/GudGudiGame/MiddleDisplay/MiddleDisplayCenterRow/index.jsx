import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import LeftSideCoins from "./LeftSideCoins";
import RightSideCoins from "./RightSideCoins";
import TableCenterRow from "./TableCenterRow";
const MiddleDisplayCenterRow = () => {
  return (
    <Row className="middleDisplayCenterRow">
      <LeftSideCoins />
      <TableCenterRow />
      <RightSideCoins />
    </Row>
  );
};

export default MiddleDisplayCenterRow;
