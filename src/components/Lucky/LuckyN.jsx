import { useState } from "react";
import "./Lucky.css";
import { getRolls } from "../../utils/helper";
import Dice from "../Dice/Dice";
import Button from "../Button/Button";

export default function LuckyN({ numDice = 2, checkWinner, title }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = checkWinner(dice);

  const rolls = () => setDice(getRolls(numDice));
  return (
    <main className="LuckyN">
      <h1>
        Lucky {title} {isWinner && <p>YOU WINNNN!</p>}
      </h1>
      <Dice dice={dice} />
      {/* <button onClick={rolls}>Re-Roll</button> */}
      <Button clickFunc={rolls} />
    </main>
  );
}
