import React, { useEffect, useState } from "react";
import { socket } from "./index";
import _ from "lodash";
import {
  useGudGudiStore,
  useLoginStore,
  useSecondGame,
  useGameStore,
} from "../states/store";
import { useNavigate } from "react-router-dom";
import last10Seconds from "../assets/Audio/last10Seconds.mp3";
// import ConnectionState from "./socket/ConnectionState";
const ConnectionManager = () => {
  const [isConnected, setIsConnected] = useState(false);
  const {
    setTimer,
    setServerMessage,
    setDateTime,
    allowBets,
    setAllowBets,
    setGameID,
    gameID,
  } = useGameStore();
  const {
    setCancelAllBets,
    clonePreviousBets,
    previousBets,
    slotsBets,
    betTotal,
    winDiceObj,
    setWinDiceObj,
    setPreviousBets,
  } = useGudGudiStore();
  const { userToken, setBalance } = useLoginStore();
  const navigateifError = useNavigate();
  const playlast10Seconds = new Audio(last10Seconds);
  const emitGudGudiBets = _.debounce(() => {
    if (countDowner === 5 && gameID > 0) {
      slotsBets.totalBet = betTotal;
      socket.emit("gudGudiBets", slotsBets);
    }
  }, 1000);
  useEffect(() => {
    function onConnect() {
      socket.emit("getMyDetails", "", (balanceReply) => {
        setBalance(balanceReply);
        setServerMessage("Please Wait untill Next Game");
      });
      socket.emit("getGameID", "", (getGameID) => {
        console.log("getGameID:", getGameID);
        setGameID(getGameID);
      });
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
      navigateifError("/login");
    }

    function onGameEvent(value) {
      setGameEvents((previous) => [...previous, value]);
    }
    function onGameTimer(countDowner) {
      setTimer(countDowner);

      if (countDowner === 21) {
        // playlast10Seconds.play();
      }
      if (countDowner === 10) {
        setAllowBets(false);
        setPreviousBets(slotsBets);
        // clonePreviousBets();
      }
      if (countDowner === 11) {
        playlast10Seconds.pause();
        playlast10Seconds.currentTime = 0;
      }
      if (countDowner === 5 && gameID > 0) {
        slotsBets.totalBet = betTotal;
        emitGudGudiBets();
        // socket.emit("gudGudiBets", slotsBets);
      }
      if (countDowner === 58) {
        setAllowBets(true);
        // setCancelAllBets();
        setServerMessage("For Amusement Only!");
      }
    }
    function onUserBalance(balanceFromServer) {
      console.log("balanceFromServer:", balanceFromServer);
      setBalance(balanceFromServer);
    }
    function onConnnectError(error) {
      navigateifError("/login");
    }
    function onServerMessage(message) {
      console.log(message);
      setServerMessage(message);
    }
    function onGameDate(getDateTime) {
      setDateTime(getDateTime);
    }
    function onGameID(getGameID) {
      setGameID(getGameID);
    }
    function onGudGudiWinningNumbers(winningArray) {
      console.log("winningArray:", winningArray);
      setWinDiceObj(winningArray);
    }
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("gameEvents", onGameEvent);
    socket.on("gameTimer", onGameTimer);
    socket.on("sendUserBalance", onUserBalance);
    socket.on("connect_error", onConnnectError);
    socket.on("serverMessage", onServerMessage);
    socket.on("serverMessage", onServerMessage);
    socket.on("gameDate", onGameDate);
    socket.on("gameID", onGameID);
    socket.on("gudGudiWinningNumbers", onGudGudiWinningNumbers);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("gameEvents", onGameEvent);
      //   socket.off("gameTimer", onGameTimer);
    };
  }, []);
  return <></>;
};

export default ConnectionManager;
