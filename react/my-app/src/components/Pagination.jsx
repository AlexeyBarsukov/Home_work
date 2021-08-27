import React from "react";

import "../styles/pagination.css";

const options = [10, 20, 30, 40, 50];

const Pagination = ({
  paginationHandler,
  currentPageHandler,
  currentPage,
  isLastPage,
}) => {
  const changeHandler = (e) => {
    paginationHandler(e);
  };

  const clickBack = () => {
    currentPageHandler(false);
  };

  const clickForward = () => {
    currentPageHandler(true);
  };

  return (
    <div className="pagination">
      <p> Select page items q-ty</p>
      <select onChange={changeHandler} className="form-select">
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <div className="pagination-buttons">
        <button
          onClick={clickBack}
          className="btn btn-success btn-sm"
          disabled={currentPage === 1 ? true : false}
        >
          Back
        </button>
        <button onClick={clickForward} disabled={isLastPage} className="btn btn-success btn-sm">
          Forward
        </button>
      </div>
    </div>
  );
};

export default Pagination;