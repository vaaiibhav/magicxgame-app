import React from "react";
import { Col, Row, Button, Container, Image } from "react-bootstrap";
import styles from "./FighterWheel.module.css";
import wheelFg from "../../assets/Game2/WheelDiv/wheelFg.png";
import wheelCrown from "../../assets/Game2/WheelDiv/wheelCrown.png";
import useSocketManager from "../../socket/useSocketManager";
import Timestamp from "react-timestamp";

import {
  useGudGudiStore,
  useGameStore,
  useLoginStore,
} from "../../states/store.js";
const FighterWheel = () => {
  const connectSocket = useSocketManager;
  const { _winning, points } = useGudGudiStore();
  const { gameDateTime, gameID, timer } = useGameStore();
  return (
    <div className={styles.fighterWheelBG}>
      <Container fluid className={styles.gameContainer}>
        <Row className={styles.topDisplayRow}>
          {" "}
          <Col>
            <label className={`${styles.pointLabel} ${styles.topLabels}`}>
              {points ? points : 0}
            </label>
          </Col>
          <Col>
            <label className={`${styles.timerLabel} ${styles.topLabels}`}>
              {"00:" + timer}
            </label>
          </Col>
          <Col>
            <label className={`${styles.winningLabel} ${styles.topLabels}`}>
              {_winning > 0 ? _winning : "-"}
            </label>
          </Col>
          <Col>
            <label className={`${styles.gameLabel} ${styles.topLabels}`}>
              {gameID ? gameID : 0}
            </label>
          </Col>
          <Col>
            <label className={`${styles.dateTimeLabel} ${styles.topLabels}`}>
              <Timestamp date={gameDateTime} />
            </label>
          </Col>
        </Row>

        <Row className={styles.middleDisplayRow}>
          <Col className={styles.leftView}>
            <Row className={`${styles.coinBox} mt-4`}>
              <Row className={styles.coinBox1}>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin10Btn}`}
                ></Button>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin50Btn}`}
                ></Button>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin100Btn}`}
                ></Button>
              </Row>
              <Row className={styles.coinBox2}>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin500Btn}`}
                ></Button>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin1000Btn}`}
                ></Button>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin5000Btn}`}
                ></Button>
              </Row>
            </Row>
            <Row className={styles.leftLabels}>
              <label className={styles.betTotalLabel}>100</label>
              <Button className={styles.takeBtn} />
            </Row>
          </Col>
          <Col className={styles.centerView}>
            <Row className={styles.WheelDiv}>
              <Image className={styles.wheelCrown} src={wheelCrown}></Image>
              <div className={styles.wheelFg}>
                <Image src={wheelFg} className={styles.spinWheel}></Image>
              </div>
              <div className={styles.wheelEmpty}></div>
            </Row>
            <Row className={styles.wheelFixer}></Row>
          </Col>
          <Col className={styles.rightView}>
            <Row className={styles.last10Data}></Row>
            <Row className={`${styles.rightBtnsGrid} ${styles.rightBtns}`}>
              <Button className={styles.cancelBtn} />
              <Button className={styles.previousBetBtn} />
              <Button className={styles.specificCancelBtn} />
              <Button className={styles.betOKBtn} />
            </Row>
          </Col>
        </Row>
        <Row className={styles.bottomDisplayRow}>
          <Row className={styles.bottomLabelsRow}>
            <Col>
              <label className={styles.labelBets}>100</label>
            </Col>
            <Col>
              <label className={styles.labelBets}>100</label>
            </Col>
            <Col>
              <label className={styles.labelBets}>100</label>
            </Col>
            <Col>
              <label className={styles.labelBets}>100</label>
            </Col>
            <Col>
              <label className={styles.labelBets}>100</label>
            </Col>
            <Col>
              <label className={styles.labelBets}>100</label>
            </Col>
            <Col>
              <label className={styles.labelBets}>100</label>
            </Col>
            <Col>
              <label className={styles.labelBets}>100</label>
            </Col>
            <Col>
              <label className={styles.labelBets}>100</label>
            </Col>
            <Col>
              <label className={styles.labelBets}>100</label>
            </Col>
          </Row>
          <Row className={styles.bottomButtonsRow}>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons1}`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons2}`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons3}`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons4}`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons5}`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons6}`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons7}`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons8}`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons9}`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons0}`}
              ></Button>
            </Col>
          </Row>
          <Row className={styles.mostBottomDisplay}>
            <Col className={styles.mostBottomCol} md={2}>
              <Button className={styles.exitBtn}></Button>
            </Col>
            <Col
              className={`${styles.mostBottomCol} ${styles.bottomStrip}`}
              md={8}
            >
              White Strip
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default FighterWheel;
