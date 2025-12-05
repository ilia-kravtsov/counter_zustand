import { create } from 'zustand';
import type { CounterStore } from './counter.types';

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  step: 1,
  lastUpdatedBy: null,

  increment: () =>
    set((state) => ({
      count: state.count + state.step,
      lastUpdatedBy: 'increment',
    })),

  decrement: () =>
    set((state) => ({
      count: state.count - state.step,
      lastUpdatedBy: 'decrement',
    })),

  reset: () =>
    set({
      count: 0,
      lastUpdatedBy: 'reset',
    }),

  setStep: (step: number) =>
    set({step}),
}));
