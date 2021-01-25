import React from "react";

const ChipsButton = ({ addChips }) => {
  return (
    <button onClick={() => addChips()} className="ChipsButton">
      Nom Nom Nom
    </button>
  );
};

export default ChipsButton;
