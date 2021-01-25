import React from "react";
import { Link, Route } from "react-router-dom";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

const VendingMachine = () => {
  return (
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}
    >
      <div className="message">
        <h1>Hello, I'm a vending machine! What would you like to eat?</h1>
      </div>
      <div className="message">
        <h1>
          <Link exact to="/soda">
            SODA
          </Link>
        </h1>

        <h1>
          <Link exact to="/chips">
            CHIPS
          </Link>
        </h1>
        <h1>
          <Link exact to="/sardines">
            FRESH SARDINES
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default VendingMachine;
