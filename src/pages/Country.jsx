import React from "react";
import { Link } from "react-router-dom";

function Country() {
  return (
    <div className="country">
      <Link to="/">
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
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Back
        </button>
      </Link>
      <div className="country__body">
        <img className="country__body__img" src="" alt="" />
        <div className="country__body__content">
          <h1>Saint Vincent and the Grenadines</h1>
          <section className="country__body__content__text">
            <section className="section1">
              <p>
                <span>Native Name:</span>
                Saint Vincent and the Grenadines
              </p>
              <p>
                <span>Population:</span>
                110.947
              </p>
              <p>
                <span>Region:</span>
                Americas
              </p>
              <p>
                <span>Sub Region:</span>
                Caribbean
              </p>
              <p>
                <span>Capital:</span>
                Kingstown
              </p>
            </section>
            <section className="section2">
              <p>
                <span>Top Level Domain:</span>
              </p>
              <p>
                <span>Currencies:</span>
                Eastern Caribbean dollar
              </p>
              <p>
                <span>Languages:</span>
                English
              </p>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Country;
