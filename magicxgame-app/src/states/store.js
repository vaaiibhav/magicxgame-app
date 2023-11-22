import { create } from "zustand";
const useLoginStore = create((set) => ({
  token: "",
  storeToken: (newToken) => set((state) => ({ token: newToken })),
  removeToken: () => set({ token: "" }),
  balance: null,
  setBalance: (balance) => {
    set({ balance }); // Update balance in useLoginStore
    const { setPoints } = useGudGudiStore.getState(); // Access setPoints from useGudGudiStore
    setPoints(balance); // Update points in useGudGudiStore
  },
  reduceBalance: (reduceBalanceBy) => set((state) => balance - reduceBalanceBy),
}));
const useGudGudiStore = create((set) => ({
  winning: null,
  points: useLoginStore.getState().balance,
  previousBets: {
    slot0Bet: 0,
    slot1Bet: 0,
    slot2Bet: 0,
    slot3Bet: 0,
    slot4Bet: 0,
    slot5Bet: 0,
  },
  slotsBets: {
    slot0Bet: 0,
    slot1Bet: 0,
    slot2Bet: 0,
    slot3Bet: 0,
    slot4Bet: 0,
    slot5Bet: 0,
  },
  clonePreviousBets: () =>
    set((state) => {
      state.previousBets = Object.assign(state.slotsBets);
    }),
  setPreviousBets: () => {},
  setPoints: (newPoints) => set({ points: newPoints }),
  setSlotsBets: (slotToBet) => {
    set((state) => {
      const updatedSlotBets = {
        ...state.slotsBets,
        [slotToBet]: state.slotsBets[slotToBet] + state.coinValue,
      };
      return {
        slotsBets: updatedSlotBets,
        points: useLoginStore.getState().balance - state.betTotal, // Deduct coinValue from points
        betTotal: state.betTotal + state.coinValue, // Add coinValue to betTotal
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
        points: state.points + state.betTotal, // Update points by adding betTotal
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
  betTotal: null,
  coinValue: 10,
  setCoinValue: (newValue) =>
    set({
      coinValue: newValue,
    }),
}));

const useGameStore = create((set) => ({
  timer: "00",
  allowBets: false,
  gameDateTime: "",
  gameID: null,
  serverMessage: `asd Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
  eiusasfasdasf`,
  setGameID: (newGameID) => set({ gameID: newGameID }),
  setAllowBets: (setBets) => set({ allowBets: setBets }),
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
