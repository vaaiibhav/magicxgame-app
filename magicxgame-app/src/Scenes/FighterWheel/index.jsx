import React from "react";
import { Col, Row, Button, Container, Image } from "react-bootstrap";
import "./FighterWheel.css";
import wheelFg from "../../assets/Game2/WheelDiv/wheelFg.png";
import wheelCrown from "../../assets/Game2/WheelDiv/wheelCrown.png";
const FighterWheel = () => {
  return (
    <div className="fighterWheelBG">
      <Container fluid className="gameContainer">
        <Row className="topDisplayRow">
          {" "}
          <Col>
            <label className="pointLabel topLabels">5000</label>
          </Col>
          <Col>
            <label className="timerLabel topLabels">5000</label>
          </Col>
          <Col>
            <label className="winningLabel topLabels">5000</label>
          </Col>
          <Col>
            <label className="gameLabel topLabels">5000</label>
          </Col>
          <Col>
            <label className="dateTimeLabel topLabels">5000</label>
          </Col>
        </Row>

        <Row className="middleDisplayRow">
          <Col className="leftView">
            <Row className="coinBox mt-4">
              <Row className=" coinBox1">
                <Button className="coinsButtons coin10Btn"></Button>
                <Button className="coinsButtons coin50Btn"></Button>
                <Button className="coinsButtons coin100Btn"></Button>
              </Row>
              <Row className=" coinBox2">
                <Button className="coinsButtons coin500Btn"></Button>
                <Button className="coinsButtons coin1000Btn"></Button>
                <Button className="coinsButtons coin5000Btn"></Button>
              </Row>
            </Row>
            <Row className="leftLabels">
              <label className="betTotalLabel">100</label>
              <Button className="takeBtn " />
            </Row>
          </Col>
          <Col className="centerView">
            <Row className="WheelDiv">
              <Image className="wheelCrown" src={wheelCrown}></Image>
              <div className="wheelFg">
                <Image src={wheelFg} className="spinWheel"></Image>
              </div>
              <div className="wheelEmpty"></div>
            </Row>
            <Row className="wheelFixer"></Row>
          </Col>
          <Col className="rightView">
            <Row className="last10Data"></Row>
            <Row className="rightBtnsGrid rightBtns">
              <Button className="cancelBtn" />
              <Button className="previousBetBtn" />
              <Button className="specificCancelBtn" />
              <Button className="betOKBtn" />
            </Row>
          </Col>
        </Row>
        <Row className="bottomDisplayRow">
          <Row className="bottomLabelsRow">
            <Col>
              <label className="labelBets">100</label>
            </Col>
            <Col>
              <label className="labelBets">100</label>
            </Col>
            <Col>
              <label className="labelBets">100</label>
            </Col>
            <Col>
              <label className="labelBets">100</label>
            </Col>
            <Col>
              <label className="labelBets">100</label>
            </Col>
            <Col>
              <label className="labelBets">100</label>
            </Col>
            <Col>
              <label className="labelBets">100</label>
            </Col>
            <Col>
              <label className="labelBets">100</label>
            </Col>
            <Col>
              <label className="labelBets">100</label>
            </Col>
            <Col>
              <label className="labelBets">100</label>
            </Col>
          </Row>
          <Row className="bottomButtonsRow">
            <Col>
              <Button className="bottomBetCoins bottomCoinButtons1"></Button>
            </Col>
            <Col>
              <Button className="bottomBetCoins bottomCoinButtons2"></Button>
            </Col>
            <Col>
              <Button className="bottomBetCoins bottomCoinButtons3"></Button>
            </Col>
            <Col>
              <Button className="bottomBetCoins bottomCoinButtons4"></Button>
            </Col>
            <Col>
              <Button className="bottomBetCoins bottomCoinButtons5"></Button>
            </Col>
            <Col>
              <Button className="bottomBetCoins bottomCoinButtons6"></Button>
            </Col>
            <Col>
              <Button className="bottomBetCoins bottomCoinButtons7"></Button>
            </Col>
            <Col>
              <Button className="bottomBetCoins bottomCoinButtons8"></Button>
            </Col>
            <Col>
              <Button className="bottomBetCoins bottomCoinButtons9"></Button>
            </Col>
            <Col>
              <Button className="bottomBetCoins bottomCoinButtons0"></Button>
            </Col>
          </Row>
          <Row className="mostBottomDisplay">
            <Col className="mostBottomCol" md={2}>
              <Button className="exitBtn"></Button>
            </Col>
            <Col className="mostBottomCol bottomStrip" md={8}>
              White Strip
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default FighterWheel;
