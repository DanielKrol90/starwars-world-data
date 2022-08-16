import "./SearchField.css";

import React from "react";
import axios from "axios";

const SearchField = (props) => {

    const url = "https://swapi.dev/api/planets/?search="

    const searchPlanetsData = (e) => {
        const target = e.target.value;
        axios
        .get(url + target)
        .then((req) => {
          props.setPlanets(req.data.results);
          props.setTotalPlanets(req.data)
        })
        .catch((error) => {
          console.log("AXIOS ERROR: ", error);
        });
      };


  return (
    <div className="searchField">
      <input
        className="searchFieldInput"
        type="text"
        placeholder="Search..."
        onChange={searchPlanetsData}
      />
    </div>
  );
};

export default SearchField;