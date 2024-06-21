import Button from "../Button/Button";
import Box from "./Box";
import { useState } from "react";

export default function BoxGrid() {
  const [boxes, setBoxes] = useState(Array(9).fill(false));

  const toggleBox = (index) => {
    const newBoxes = [...boxes];
    newBoxes[index] = !newBoxes[index];
    setBoxes(newBoxes);
  };
  const handleReset = () => {
    setBoxes(Array(9).fill(false));
  };

  return (
    <div className="BoxGrid">
      {boxes.map((val, index) => (
        <Box key={index} isActive={val} toggle={() => toggleBox(index)} />
      ))}
      <Button clickFunc={handleReset} title="Reset" />
    </div>
  );
}
