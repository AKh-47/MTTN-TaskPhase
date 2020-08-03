import React from "react";

import "./Pagination.scss";

export default function Pagination({
  currentPage,
  numOfPages,
  pageChangeHandler,
  nextPageHandler,
  prevPageHandler,
}) {
  const buttons = [];

  for (let i = 1; i <= numOfPages; i++) {
    buttons.push(i);
  }

  return (
    <div className="pagination">
      <div
        hidden={currentPage === 1}
        onClick={prevPageHandler}
        className="pagination__button pagination__button--prev"
      >
        {"<"}
      </div>
      {buttons.map((num) => {
        const classList = ["pagination__button"];

        if (num === currentPage) {
          classList.push("pagination__button--active");
        }

        return (
          <div
            key={num}
            onClick={() => pageChangeHandler(num)}
            className={classList.join(" ")}
          >
            {num}
          </div>
        );
      })}
      <div
        hidden={currentPage === numOfPages}
        onClick={nextPageHandler}
        className="pagination__button pagination__button--next"
      >
        &gt;
      </div>
    </div>
  );
}
