import React from "react";
import "Card.css";

function Card() {
  return (
    <div className="card">
      <img
        className="card__img"
        src="https://flagcdn.com/pk.svg"
        alt="Pakistan"
      />
      <div className="card__content">
        <h2>Pakistan</h2>
        <p className="card__text">
          <span>Population</span>: 220892331
        </p>
        <p className="card__text">
          <span>Region</span>: Asia
        </p>
        <p className="card__text">
          <span>Capital</span>: Islamabad
        </p>
      </div>
    </div>
  );
}

export default Card;
