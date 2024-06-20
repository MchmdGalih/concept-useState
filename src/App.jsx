import "./App.css";
import LuckyN from "./components/Lucky/LuckyN";
function App() {
  return (
    <div>
      <LuckyN />
      <LuckyN numDice={3} goal={10} />
    </div>
  );
}

export default App;
