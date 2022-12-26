import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Country.css";

function Country() {
  let Data = useParams();
  let [country, setCountry] = useState();
  const countryPage = useRef();

  if (countryPage?.current?.parentElement?.classList == "dark__fon") {
    const button = countryPage?.current?.children[0].children[0];
    const borders =
      countryPage?.current?.children[1].children[1].children[2].children[1]
        .children;

    countryPage.current.classList.add("dark__fon__body");
    button.classList.add("dark__fon_button");
    Array.from(borders).forEach((item) => {
      // console.log(item);
      item.classList.add("dark__fon__border");
    });
  }

  useEffect(() => {
    axios(`https://restcountries.com/v3.1/name/${Data.Data}`).then((res) => {
      setCountry(() => res.data[0]);
    });
  }, []);

  return (
    <div ref={countryPage} className="country">
      <Link to="/" className="back">
        <button>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          Back
        </button>
      </Link>
      <div className="country__body">
        <img
          className="country__body__img"
          src={country?.flags?.svg}
          alt={country?.name?.common}
        />
        <div className="country__body__content">
          <h1>{country?.name?.common}</h1>
          <section className="country__body__content__text">
            <section className="section1">
              <p>
                <span>Native Name:</span>
                &nbsp;{country?.name?.official}
              </p>
              <p>
                <span>Population:</span>
                &nbsp;{country?.population}
              </p>
              <p>
                <span>Region:</span>
                &nbsp;{country?.region}
              </p>
              <p>
                <span>Sub Region:</span>
                &nbsp;{country?.subregion}
              </p>
              <p>
                <span>Capital:</span>
                &nbsp;{country?.capital}
              </p>
            </section>
            <section className="section2">
              <p>
                <span>Top Level Domain:</span>
              </p>
              <p>
                <span>Currencies:</span>
                &nbsp;
                {country !== undefined
                  ? Object.entries(country?.currencies)[0][1].name
                  : null}
              </p>
              <p>
                <span>Languages:</span>
                &nbsp;
                {country?.languages !== undefined
                  ? Object.values(country?.languages).join(", ")
                  : null}
              </p>
            </section>
          </section>
          <div className="country__body__content__down">
            <span>Border:</span>
            <div className="country__body__content__down__borders">
              {country?.borders !== undefined ? (
                country.borders.map((border) => {
                  return (
                    <p key={border} className="border">
                      {border}
                    </p>
                  );
                })
              ) : (
                <p>No borders</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
