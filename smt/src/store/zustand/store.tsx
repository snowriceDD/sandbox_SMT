// store.js
import create from 'zustand';

const useStore = create((set) => ({
  counter: 0,
  incrementCounter: () => set((state: { counter: number; }) => ({ counter: state.counter + 1 })),
}));

export default useStore;