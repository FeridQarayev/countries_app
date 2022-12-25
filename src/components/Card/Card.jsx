import React from "react";
import "./Card.css";

function Card(country) {
  const data = country.country;
  //   console.log("ad ", data.idd);
  return (
    <div className="card">
      <img className="card__img" src={data.flags.png} alt="Pakistan" />
      <div className="card__content">
        <h2>{data.name.common}</h2>
        <p className="card__text">
          <span>Population</span>: {data.population}
        </p>
        <p className="card__text">
          <span>Region</span>: {data.region}
        </p>
        <p className="card__text">
          <span>Capital</span>: {data.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
