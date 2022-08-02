import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Planets from './PlanetsData/PlanetsData';
import Pagination from './components/Pagination';
import SearchField from './components/SearchField';

function App() {

  const [planets, setPlanets] = useState([]);
  const [planetsPerPage] = useState(10);
  const [totalPlanets, setTotalPlanets] = useState([])

  const getPlanetsData = (page) => {
    axios
      .get("https://swapi.dev/api/planets?page=" + page)
      .then((req) => {
        setPlanets(req.data.results);
        setTotalPlanets(req.data)
      })
      .catch((error) => {
        console.log("AXIOS ERROR: ", error);
      });
  };



  useEffect(() => {
    getPlanetsData(1);
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Universe List of Planets</h1>
      <SearchField setPlanets={setPlanets} />
      <div className="listPlanets">
      {planets.map((planets) => {
        return (
        <Planets key={planets.name} planets={planets}  />   
      )})}
      </div>
        <Pagination totalPlanets={totalPlanets.count} planetsPerPage={planetsPerPage} paginate={getPlanetsData} />
    </div>
  );
}

export default App;
