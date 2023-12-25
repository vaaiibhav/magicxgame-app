import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { serverURL, serverHost, serverPort } from "../constants";
import {
  useGudGudiStore,
  useLoginStore,
  useSecondGame,
  useGameStore,
} from "../states/store";
import { useNavigate } from "react-router-dom";
import last10Seconds from "../assets/Audio/last10Seconds.mp3";
const useSocketManager = () => {
  const [isConnected, setIsConnected] = useState(false);
  const {
    setTimer,
    setServerMessage,
    setDateTime,
    allowBets,
    setAllowBets,
    setGameID,
    allowSendData,
    setAllowSendData,
    gameID,
    setSocketInstance,
  } = useGameStore();
  const {
    setCancelAllBets,
    clonePreviousBets,
    previousBets,
    slotsBets,
    betTotal,
    winDiceObj,
    setlastTenValues,
    setblinkTake,
    setWinDiceObj,
    setWinning,
    setPreviousBets,
  } = useGudGudiStore();
  const { userToken, setBalance } = useLoginStore();
  const navigateifError = useNavigate();
  const playlast10Seconds = new Audio(last10Seconds);

  useEffect(() => {
    const socket = io(serverURL, {
      auth: { token: localStorage.getItem("blueFighter.authToken") },
    });
    function onConnect() {
      socket.emit("getMyDetails", "", (balanceReply) => {
        setBalance(Number(balanceReply));
        setServerMessage("Please Wait untill Next Game");
        setSocketInstance(socket);
      });
      socket.emit("getGameID", "", (getGameID) => {
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
      setBalance(balanceFromServer);
    }
    function onConnnectError(error) {
      navigateifError("/login");
    }
    function onServerMessage(message) {
      setServerMessage(message);
    }
    function onGameDate(getDateTime) {
      setDateTime(getDateTime);
    }
    function onGameID(getGameID) {
      setGameID(getGameID);
    }
    function onGudGudiWinningNumbers(winningNumberObject) {
      console.log("winningNumberObject:", winningNumberObject);
      const winFromThisGame = gudGudiPointsCalculator(
        winningNumberObject,
        slotsBets
      );
      if (winFromThisGame > 0) setblinkTake(true);
      setAllowSendData(false);
      setWinDiceObj(winningNumberObject);
      setWinning(winFromThisGame);
    }
    function emitGudGudiBets() {
      if (!allowSendData) return setServerMessage("Please Take to Proceed");
      slotsBets.totalBet = betTotal;
      console.log("slotsBets:", slotsBets);
      socket.emit("gudGudiBets", slotsBets, (callBack) => {
        console.log("callBack:", callBack);
      });

      socket.emit("getMyDetails", "", (balanceReply) => {
        setBalance(Number(balanceReply));
        setServerMessage("Please Wait untill Next Game");
        setSocketInstance(socket);
      });
    }
    function calculateAmount(hit, amount) {
      if (hit === 0) return 0;
      else if (hit === 1) return amount / 2;
      else if (hit === 2) return amount * 3;
      else if (hit === 3) return amount * 5;
      else if (hit === 4) return amount * 10;
      else if (hit === 5) return amount * 20;
      else if (hit === 6) return amount * 50;
    }
    function gudGudiPointsCalculator(winningArray, slotsBets) {
      let winPoints = 0;
      let amountOnSlot = [];
      for (let index = 0; index < winningArray.diceValues.length; index++) {
        const slotBetKey = `slot${index}Bet`; // Construct the key dynamically
        amountOnSlot[index] = calculateAmount(
          winningArray.diceValues[index],
          slotsBets[slotBetKey]
        );
        winPoints = winPoints + amountOnSlot[index];
      }
      return winPoints;
    }
    function gudGudiLastWinning(dataValues) {
      setlastTenValues(dataValues);
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
    socket.on("gudGudiLastWinning", gudGudiLastWinning);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("gameEvents", onGameEvent);
      //   socket.off("gameTimer", onGameTimer);
    };
  }, []);
};

export default useSocketManager;
