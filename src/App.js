import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Planets from './PlanetsData/PlanetsData';
import Pagination from './components/Pagination';

function App() {
  const [planets, setPlanets] = useState([]);
  const [pageOnView, setPageOnView] = useState();
  const [planetsPerPage] = useState(10);
  const [totalPlanets, setTotalPlanets] = useState([])

  const getPlanetsData = () => {
    
    axios
      .get("https://swapi.dev/api/planets")
      .then((req) => {
        setPlanets(req.data.results);
        setTotalPlanets(req.data)
        console.log(req.data);
      })
      .catch((error) => {
        console.log("AXIOS ERROR: ", error);
      });
  };





  useEffect(() => {
    getPlanetsData();
  }, []);

  const paginate = pageNumber => setPageOnView(pageNumber);

  return (
    <div className="App">
      <h1>Star Wars Universe List of Planets</h1>
      <div className="listPlanets">
      {planets.map((planets) => {
        return (
        <Planets key={planets.name} planets={planets} />   
      )})}
      </div>
        <Pagination totalPlanets={totalPlanets.count} planetsPerPage={planetsPerPage} paginate={paginate} />
    </div>
  );
}

export default App;
