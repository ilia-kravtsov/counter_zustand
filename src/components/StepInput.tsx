import type { ChangeEvent } from "react";
import {useCounterStore} from "../state/counter/counter.store.ts";

export default function StepInput() {
  const step = useCounterStore((state) => state.step);
  const setStep = useCounterStore((state) => state.setStep);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) setStep(value);
  };

  return (
    <input
      type="number"
      value={step}
      onChange={handleChange}
    />
  );
}
