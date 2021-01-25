import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChipsButton from "./ChipsButton";
import Chip from "./Chip";

function getRandom(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}

const Chips = () => {
  const [chips, setChips] = useState([]);
  const addChips = () => {
    setChips((chips) => [...chips, { x: getRandom(), y: getRandom() }]);
  };
  return (
    <div className="Chips">
      <div className="message">
        <h1>Bags Eaten: {chips.length}</h1>
        <ChipsButton addChips={addChips} />
        <Link to="/">Go Back</Link>
      </div>
      {chips.map(({ x, y }, idx) => (
        <Chip key={idx} x={x} y={y} />
      ))}
    </div>
  );
};

export default Chips;
