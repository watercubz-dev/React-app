import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

function Card({title, description}) {
  return (
    <div className="card">
      <Link to={title}>
        <h2>{title}</h2>
      </Link>
      <p>{description}</p>
    </div>
  );
}

export default Card;
