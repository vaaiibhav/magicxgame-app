import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./gudigudigame.module.css";
import TopDisplay from "./TopDisplay";
import MiddleDisplay from "./MiddleDisplay";
import BottomDisplay from "./BottomDisplay";
import useSocketManager from "../../socket/useSocketManager";

const GudGudiGame = () => {
  const socketManager = useSocketManager();

  return (
    <Container fluid className={styles.gameLayout}>
      <TopDisplay />
      <MiddleDisplay />
      <BottomDisplay />
    </Container>
  );
};

export default GudGudiGame;
