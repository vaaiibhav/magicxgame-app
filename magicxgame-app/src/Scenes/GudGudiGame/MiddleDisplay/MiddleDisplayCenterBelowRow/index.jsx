import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import LeftSideButtons from "./LeftSideButtons";
import RightSideButtons from "./RightSideButtons";
import TableCenterBelowRow from "./TableCenterBelowRow";

const MiddleDisplayCenterBelowRow = () => {
  return (
    <Row className="middleDisplayCenterBelowRow">
      <LeftSideButtons />
      <TableCenterBelowRow />
      <RightSideButtons />
    </Row>
  );
};

export default MiddleDisplayCenterBelowRow;
