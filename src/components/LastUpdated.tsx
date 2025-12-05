import {useCounterStore} from "../state/counter/counter.store.ts";

export default function LastUpdated() {
  const lastUpdatedBy = useCounterStore((state) => state.lastUpdatedBy);

  return (
    <div>
      Last updated by: {lastUpdatedBy ?? '-'}
    </div>
  );
}
