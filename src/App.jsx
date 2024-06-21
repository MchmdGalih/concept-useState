import "./App.css";
import { allSameValue, lessThan4 } from "./utils/helper";
import LuckyN from "./components/Lucky/LuckyN";

import BoxGrid from "./components/Box/BoxGrid";
function App() {
  return (
    <div>
      {/* <LuckyN checkWinner={lessThan4} title="Less than 4 you win" />
      <LuckyN checkWinner={allSameValue} title="All same value you win" /> */}
      Practice Passing State Updating
      <BoxGrid />
    </div>
  );
}

export default App;
