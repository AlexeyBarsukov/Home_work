import "../styles/filtersWrapper.css";
import Filter from "./Filter";
import React, { useState } from "react";

const filters = [
  { name: "abv_gt", type: "number", description: "ABV greater than" },
  { name: "abv_lt", type: "number", description: "ABV less than" },
  { name: "ibu_gt", type: "number", description: "IBU greater than " },
  { name: "ibu_lt", type: "number", description: " IBU less than" },
  { name: "ebc_lt", type: "number", description: " EBC greater than" },
  { name: "yeast", type: "string", description: "Yeast name" },
  {
    name: "brewed_before",
    type: "date",
    description: "Brewed before this date",
  },
  { name: "brewed_after", type: "date", description: "Brewed after this date" },
  { name: "hops", type: "string", description: "Hops title" },
  { name: "malt", type: "string", description: "Malt title" },
  { name: "food", type: "string", description: "Suitable food" },
  { name: "ids", type: "string", description: "ID" },
];

const Filters = function ({ getApiFilters, setCurrentPage }) {
  const [inputFilters, setInputFilters] = useState([]);

  const inputStatus = function (data) {
    setInputFilters((prevState) => {
      // existing sortfield was cleaned up
      if (data.value === "") {
        const sameElement = prevState.find((item) => item.name === data.name);
        const index = prevState.indexOf(sameElement);
        // можно обьединить в findIndex, чтоб 2 раза по масиву не бегать
        return [...prevState.splice(1, index)];
      }

      // item changed or new item
      const filtered = prevState.filter((item) => item.name !== data.name);

      if (filtered.length === prevState.length) {
        return [...prevState, data];
      }
      return [...filtered, data];
    });
  };

  const clickHandler = () => {
    const resultArray = inputFilters.map((item) => {
      if (item.type === "date") {
        const date = new Date(item.value);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return `&${item.name}=${month}-${year}`;
      } else {
        return `&${item.name}=${item.value}`;
      }
    });
    setCurrentPage( prevState => 1)  
    // нет смысла функцию бросать, можно просто бросить единицу
    getApiFilters(resultArray);
  };

  return (
    <div className="d-flex flex-wrap p-3 bg-light">
      {filters.map((item) => (
        <Filter
          params={item}
          key={item.name}
          inputStatus={inputStatus}
        ></Filter>
      ))}
      <button onClick={clickHandler} className="btn btn-primary btn-sm">
        apply filters
      </button>
    </div>
  );
};

export default Filters;
