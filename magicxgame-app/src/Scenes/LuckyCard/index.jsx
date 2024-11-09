import React from "react";
import { Col, Row, Button, Container, Image } from "react-bootstrap";
import styles from "./FighterWheel95.module.css";
import wheelFg from "../../assets/Game2/WheelDiv/wheelFg.png";
import wheelCrown from "../../assets/Game3/WheelDiv/wheelCrown.png";
import useSocketManager from "../../socket/useSocketManager";

const LuckyCard = () => {
  const connectSocket = useSocketManager();
  const winningBhaav = 10;
  return (
    <div className={styles.fighterWheelBG}>
      <Container fluid className={styles.gameContainer}>
        <Row className={styles.topDisplayRow}>
          {" "}
          <Col>
            <label className={`${styles.pointLabel} ${styles.topLabels}`}>
              5000
            </label>
          </Col>
          <Col>
            <label className={`${styles.timerLabel} ${styles.topLabels}`}>
              5000
            </label>
          </Col>
          <Col>
            <label className={`${styles.winningLabel} ${styles.topLabels}`}>
              5000
            </label>
          </Col>
          <Col>
            <label className={`${styles.gameLabel} ${styles.topLabels}`}>
              5000
            </label>
          </Col>
          <Col>
            <label className={`${styles.dateTimeLabel} ${styles.topLabels}`}>
              5000
            </label>
          </Col>
        </Row>

        <Row className={styles.middleDisplayRow}>
          <Col className={styles.leftView}>
            <Row className={`${styles.coinBox} mt-4`}>
              <Row className={styles.coinBox1}>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin10Btn} btn-warning`}
                ></Button>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin50Btn} btn-warning`}
                ></Button>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin100Btn} btn-warning`}
                ></Button>
              </Row>
              <Row className={styles.coinBox2}>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin500Btn} btn-warning`}
                ></Button>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin1000Btn} btn-warning`}
                ></Button>
                <Button
                  className={`${styles.coinsButtons} ${styles.coin5000Btn} btn-warning`}
                ></Button>
              </Row>
            </Row>
            <Row className={styles.leftLabels}>
              <label className={styles.betTotalLabel}>100</label>
              <Button className={`${styles.takeBtn} btn-warning`} />
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
              <Button className={`${styles.cancelBtn} btn-warning`} />
              <Button className={`${styles.previousBetBtn} btn-warning`} />
              <Button className={`${styles.specificCancelBtn} btn-warning`} />
              <Button className={`${styles.betOKBtn} btn-warning`} />
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
                type="warn"
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons1} btn-warning`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons2} btn-warning`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons3} btn-warning`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons4} btn-warning`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons5} btn-warning`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons6} btn-warning`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons7} btn-warning`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons8} btn-warning`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons9} btn-warning`}
              ></Button>
            </Col>
            <Col>
              <Button
                className={`${styles.bottomBetCoins} ${styles.bottomCoinButtons0} btn-warning`}
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

export default LuckyCard;
