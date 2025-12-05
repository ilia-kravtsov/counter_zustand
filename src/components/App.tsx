import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';
import StepInput from './StepInput';
import LastUpdated from './LastUpdated';

function App() {
  return (
    <div>
      <div>
        <header>
          <h1>Counter — Zustand variant</h1>
          <p>
            Minimal playground for comparing UI state managers
          </p>
        </header>

        <main>
          <CounterDisplay />

          <CounterControls />
          <StepInput />

          <LastUpdated />
        </main>

        <footer>
          Zustand implementation. UI is intentionally minimal and manager-agnostic.
        </footer>
      </div>
    </div>
  );
}

export default App;