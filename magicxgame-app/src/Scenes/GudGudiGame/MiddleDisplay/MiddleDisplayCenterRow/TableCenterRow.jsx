import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const TableCenterRow = () => {
  const slot1 = [0, 1, 6, 8, 4, 3, 1, 0, 1, 1];
  return (
    <Col md={8} className="tableAboveRow">
      <div className="tableSlot">
        <label className="slot1Bet">10</label>
        <label className="slot1Logo slotLogo">&nbsp;</label>
        <div className="slot1last10">
          {slot1.map((last, index) => (
            <label key={index} className="lastwinns">
              {" "}
              {last > 0 ? last : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className="tableSlot">
        {" "}
        <label className="slot1Bet">10</label>
        <label className="slot2Logo slotLogo">&nbsp;</label>
        <div className="slot1last10">
          {slot1.map((last, index) => (
            <label key={index} className="lastwinns">
              {" "}
              {last > 0 ? last : "X"}
            </label>
          ))}
        </div>
      </div>
      <div className="tableSlot">
        {" "}
        <label className="slot1Bet">10</label>
        <label className="slot3Logo slotLogo">&nbsp;</label>
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

export default TableCenterRow;
