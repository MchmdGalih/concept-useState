import { useState } from "react";
import "./Lucky.css";
import { getRolls, getSum } from "../../utils/helper";
import Dice from "../Dice/Dice";

export default function LuckyN({ numDice = 2, goal = 7 }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = getSum(dice) === goal;

  const rolls = () => setDice(getRolls(numDice));
  return (
    <main className="LuckyN">
      <h1>
        Lucky{goal} {isWinner && "YOU WINNNN!"}
      </h1>
      <Dice dice={dice} />
      <button onClick={rolls}>Re-Roll</button>
    </main>
  );
}
