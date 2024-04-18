import { create } from "zustand";

const useLoginStore = create((set) => ({
  token: "",
  storeToken: (newToken) => set((state) => ({ token: newToken })),
  removeToken: () => set({ token: "" }),
  balance: 0,
  setBalance: (balance) => {
    set({ balance }); // Update balance in useLoginStore
    const { setPoints } = useGudGudiStore.getState(); // Access setPoints from useGudGudiStore
    setPoints(balance); // Update points in useGudGudiStore
  },
  reduceBalance: (reduceBalanceBy) => set((state) => balance - reduceBalanceBy),
}));
const useGudGudiStore = create((set) => ({
  _winning: 0,
  blinkTake: false,
  lastTenValues: [{}],
  points: Number(useLoginStore.getState().balance),
  previousBets: {
    slot0Winning: 0,
    slot1Winning: 0,
    slot2Winning: 0,
    slot3Winning: 0,
    slot4Winning: 0,
    slot5Winning: 0,
  },
  slotsBets: {
    slot0Bet: 0,
    slot1Bet: 0,
    slot2Bet: 0,
    slot3Bet: 0,
    slot4Bet: 0,
    slot5Bet: 0,
  },
  betTotal: 0,
  coinValue: 10,
  winDiceObj: {},
  rollDices: false,
  setPreviousBets: (currentBets) => {
    set({ previousBets: currentBets });
  },
  setlastTenValues: (newlastTenValues) =>
    set({ lastTenValues: newlastTenValues }),
  setblinkTake: (newblinkTake) => set({ blinkTake: newblinkTake }),
  setPoints: (newPoints) => set({ points: newPoints }),
  setWinning: (newWinning) => set({ _winning: newWinning }),
  setSlotsBets: (slotToBet) => {
    set((state) => {
      const updatedSlotBets = {
        ...state.slotsBets,
        [slotToBet]: state.slotsBets[slotToBet] + state.coinValue,
      };
      let currentBetTotal = state.betTotal + state.coinValue;
      let currentPoint =
        Number(useLoginStore.getState().balance) - currentBetTotal;
      return {
        slotsBets: updatedSlotBets,
        betTotal: currentBetTotal, // Add coinValue to betTotal
        points: currentPoint, // Deduct coinValue from points
      };
    });
  },
  setSpecificCancel: (slotToCancel) => {
    set((state) => {
      const updatedSlotBets = {
        ...state.slotsBets,
        [slotToBet]: 0,
      };

      return {
        slotsBets: updatedSlotBets,
        // points: useLoginStore.getState().balance - state.betTotal, // Deduct coinValue from points
        betTotal: state.betTotal - state.slotsBets.slotToBet, // Add coinValue to betTotal
      };
    });
  },
  // Your setCancelAllBets function
  setCancelAllBets: () =>
    set((state) => {
      const updatedSlotsBets = {}; // Create a new object for updated slot bets
      // Reset all slot bets to 0
      Object.keys(state.slotsBets).forEach((key) => {
        updatedSlotsBets[key] = 0;
      });
      // Update the state with new values
      return {
        ...state, // Maintain other state values
        slotsBets: updatedSlotsBets, // Update slot bets
        points: Number(useLoginStore.getState().balance), // Update points by adding betTotal
        betTotal: 0, // Add coinValue to betTotal
      };
    }),
  //DoubleBets
  setBetDouble: () =>
    set((state) => {
      const updatedSlotsBets = {};
      let newBetTotal = 0;
      // Double the bets on all slots
      Object.keys(state.slotsBets).forEach((key) => {
        updatedSlotsBets[key] = state.slotsBets[key] * 2;
        newBetTotal += updatedSlotsBets[key]; // Calculate the new total bet
      });
      return {
        ...state,
        slotsBets: updatedSlotsBets, // Update slot bets with doubled values
        points: state.points + state.betTotal, // Add the current betTotal to points
        betTotal: newBetTotal * 2, // Double the new total bet
      };
    }),
  setRollDices: (diceState) => {
    set({ rollDices: diceState });
  },
  setWinDiceObj: (winArray) => {
    set({ winDiceObj: winArray });
  },
  setCoinValue: (newValue) =>
    set({
      coinValue: newValue,
    }),
}));

const useGameStore = create((set) => ({
  timer: "00",
  allowBets: true,
  allowSendData: true,
  gameDateTime: "",
  gameID: 0,
  socketInstance: {},
  serverMessage: `asd Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
  eiusasfasdasf`,
  setSocketInstance: (newSocketInstance) =>
    set({ socketInstance: newSocketInstance }),
  setGameID: (newGameID) => set({ gameID: newGameID }),
  setAllowBets: (setBets) => set({ allowBets: setBets }),
  setAllowSendData: (setAllowSendData) =>
    set({ allowSendData: setAllowSendData }),
  setServerMessage: (message) => set({ serverMessage: message }),
  setTimer: (newTime) => {
    set({ timer: newTime });
  },
  setDateTime: (dateTime) => set({ gameDateTime: dateTime }),
}));

const useSecondGame = create((set) => ({
  bears: 123454,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
export { useGudGudiStore, useLoginStore, useSecondGame, useGameStore };
