import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Planets from './PlanetsData/PlanetsData'

function App() {
  const [planets, setPlanets] = useState([]);

  const getPlanetsData = () => {
  
    axios
      .get("https://swapi.dev/api/planets/")
      .then((req) => {
        setPlanets(req.data.results);
      })
      .catch((error) => {
        console.log("AXIOS ERROR: ", error);
      });
  };

  useEffect(() => {
    getPlanetsData();
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Universe List of Planets</h1>
      <div className="listPlanets"></div>
      {planets.map((planets) => {
        return (
        <Planets key={planets.name} planets={planets} />   
      )})}
    </div>
  );
}

export default App;
