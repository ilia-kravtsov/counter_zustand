import {useCounterStore} from "../state/counter/counter.store.ts";

export default function CounterDisplay() {
  const count = useCounterStore((state) => state.count);
  return <div>{count}</div>;
}
