import React from "react";
import "./Chip.css";
import ChipsImage from "./Chips.png";

const Chip = ({ idx, x, y }) => {
  return (
    <div
      className="ChipBag"
      style={{
        position: "absolute",
        top: `${y}vh`,
        left: `${x}vw`,
      }}
    >
      <img src={ChipsImage} alt="Chip Bag" />
    </div>
  );
};

export default Chip;
