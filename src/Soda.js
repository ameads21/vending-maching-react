import React from "react";
import { Link } from "react-router-dom";
import "./Soda.css";
import sodaImage from "./Soda.png";

const Soda = () => {
  return (
    <div className="Soda">
      <img src={sodaImage} alt="Soda Can" />
      <div className="message">
        <h1>Sugar!!!!!!!</h1>
        <h1>
          <Link to="/">Go Back</Link>
        </h1>
      </div>
      <img src={sodaImage} alt="Soda Can" />
    </div>
  );
};

export default Soda;
