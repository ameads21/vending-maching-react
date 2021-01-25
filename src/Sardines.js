import React from "react";
import "./Sardines.css";
import { Link } from "react-router-dom";

const Sardines = () => {
  return (
    <div className="Sardines">
      <div className="message">
        <h1>You don't eat sardines. The sardines, they eat you!!</h1>
        <h1>
          <Link to="/">Go Back</Link>
        </h1>
      </div>
    </div>
  );
};

export default Sardines;
