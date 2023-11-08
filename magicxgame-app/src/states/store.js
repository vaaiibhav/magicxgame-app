import { create } from "zustand";

const useGudGudiStore = create((set) => ({
  winning: 485,
  coin: 10,
  gameTime: new Date().toString(),
  gameID: 456112,
}));
const loginStore = create((set) => ({
  token: "",
  storeToken: (newToken) => set((state) => ({ token: newToken })),
  removeToken: () => set({ token: "" }),
  balance: 0,
  setBalance: (balance) => set((state) => balance),
}));
const useGameStore = create((set) => ({
  timer: "00:41",
  setTimer: (newTime) => set({ timer: newTime }),
}));
const useSecondGame = create((set) => ({
  balance: 123454,

  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export { useGudGudiStore, loginStore, useSecondGame, useGameStore };
