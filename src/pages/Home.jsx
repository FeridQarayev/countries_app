import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Card from "../components/Card/Card";
import axios from "axios";

function Home() {
  const [countryes, setCountryes] = useState([]);
  const [query, setQuery] = useState("");
  const [regionState, setRegionState] = useState("");
  const modal = useRef();
  const regionInp = useRef();
  const home = useRef();
  // console.log(query);

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all").then((res) => {
      setCountryes(res.data);
    });
  }, []);

  function openModal(e) {
    modal.current.classList.toggle("modal__open");
    // console.log(e.target.focus());
  }
  if (regionInp?.current !== undefined) {
    // console.log(regionInp?.current?.parentElement.nextElementSibling.children);
    Array.from(
      regionInp?.current?.parentElement.nextElementSibling.children
    ).map((child) => {
      child.addEventListener("click", (e) => {
        regionInp.current.value = e.target.innerText;
        setRegionState(() => regionInp.current.value.toString());
        openModal();
      });
    });
  }
  if (home?.current?.parentElement?.classList == "dark__fon") {
    home.current.classList.add("dark__fon__body");
    const search = home?.current?.children[0]?.children[0];
    search.classList.add("dark__fon__body__up");
    const cards = home?.current?.children[0]?.children[1].children;
    Array.from(cards).forEach((element) => {
      element.classList.add("dark__fon__card");
    });
  }

  // console.log(regionState);
  return (
    <div ref={home} className="home">
      <div className="body">
        <div className="body__up">
          <div className="body__up__left shadow">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              viewBox="0 0 16 16"
              className="text-Dark_Gray"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search for country..."
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="body__up__right shadow">
            <div className="body__up__right__panel">
              <input
                ref={regionInp}
                type="text"
                placeholder="Filter by region"
                onClick={(e) => {
                  openModal(e);
                }}
              />
              <div className="body__up__right__panel__right">
                <div className="body__up__right__panel__right__icon">
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    className="css-8mmkcg"
                  >
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div ref={modal} className="body__up__right__modal shadow">
              <p>Africa</p>
              <p>Americas</p>
              <p>Asia</p>
              <p>Europe</p>
              <p>Oceania</p>
            </div>
          </div>
        </div>
        <div className="body__down">
          {countryes
            .filter((fill) => {
              if (query === "") {
                return fill;
              } else if (
                fill.name.common.toLowerCase().includes(query.toLowerCase())
              ) {
                return fill;
              }
            })
            .filter((fillRegion) => {
              if (regionState === "") {
                return fillRegion;
              } else if (
                fillRegion.region
                  .toLowerCase()
                  .includes(regionState.toLowerCase())
              ) {
                return fillRegion;
              }
            })
            .map((country) => {
              return <Card key={country.name.common} country={country} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
