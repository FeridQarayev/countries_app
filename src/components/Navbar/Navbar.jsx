import React from "react";
import "./Navbar.css";

function Navbar() {
  function changeColor(e) {
    const header = e.target.parentElement;
    const body = e.target.parentElement.nextElementSibling;
    if (body.classList != "country") {
      const search =
        e.target.parentElement.nextElementSibling.children[0].children[0];
      const cards =
        e.target.parentElement.nextElementSibling.children[0].children[1]
          .children;

      Array.from(cards).forEach((element) => {
        element.classList.toggle("dark__fon__card");
      });
      search.classList.toggle("dark__fon__body__up");
    }

    if (body.classList == "country") {
      const button =
        e.target.parentElement.nextElementSibling.children[0].children[0];
      const borders =
        e.target.parentElement.nextElementSibling.children[1].children[1]
          .children[2].children[1].children;

      button.classList.toggle("dark__fon_button");
      Array.from(borders).forEach((item) => {
        item.classList.toggle("dark__fon__border");
      });
    }
    const root = e.target.parentElement.parentElement;

    root.classList.toggle("dark__fon");
    header.classList.toggle("dark__fon__header");
    body.classList.toggle("dark__fon__body");
  }
  return (
    <header>
      <h1>Where in the world?</h1>
      <p
        onClick={(e) => {
          changeColor(e);
        }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
        </svg>
        Dark Mode
      </p>
    </header>
  );
}

export default Navbar;
