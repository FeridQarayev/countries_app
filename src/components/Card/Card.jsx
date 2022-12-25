import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card(country) {
  const data = country.country;
  let navigate = useNavigate();
  function goCountry() {
    navigate(`/country/${data.name.common}`);
  }

  return (
    <div onClick={() => goCountry()} className="card">
      <img className="card__img" src={data.flags.svg} alt={data.name.common} />
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
