import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {

  const [planets, setPlanets] = useState([])




  const getPlanetsData = () => {
    axios
      .post('https://swapi.dev/api/planets')
      .then((req) => {
        setPlanets(req.data);
        console.log(req.data);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };






  
  return (
    <div className="App">
      <h1>Star Wars Universe List of Planets</h1>
        <div className="listPlanets">
        </div>

    </div>
  );
}

export default App;
