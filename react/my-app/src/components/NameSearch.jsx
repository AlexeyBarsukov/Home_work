import React from "react";

const NameSearch = ({ setSearchTerm }) => {
  return (
    <label>
      <input
        type="text"
        placeholder="Input beer titile"
        onChange={(e) => {
          if (e.target.value === "") {
            setSearchTerm([]);
          } else {
            setSearchTerm([`&beer_name=${e.target.value}`]);
          }
        }}
      />
    </label>
  );
};
export default NameSearch;