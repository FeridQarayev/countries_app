import React from "react";
import "./Home.css";
import Card from "../components/Card/Card";

function Home() {
  return (
    <div className="home">
      <div className="body">
        <div className="body__up">
          <div className="body__up__left shadow">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 16 16"
              class="text-Dark_Gray"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
            </svg>
            <input type="text" placeholder="Search for country..." />
          </div>
          <div className="body__up__right shadow">
            <div className="body__up__right__panel">
              <input type="text" placeholder="Filter by region" />
              <div className="body__up__right__panel__right">
                <div className="body__up__right__panel__right__icon">
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    class="css-8mmkcg"
                  >
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="body__up__right__modal shadow">
              <p>Africa</p>
              <p>Americas</p>
              <p>Asia</p>
              <p>Europe</p>
              <p>Ocenia</p>
            </div>
          </div>
        </div>
        <div className="body__down">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
