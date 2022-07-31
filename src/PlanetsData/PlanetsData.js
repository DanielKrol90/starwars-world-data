import React, { useState } from "react";
import "./PlanetsData.css";

const Planets = (props) => {

    let planet = props.planets;

    const [planets, setPlanets] = useState();

  return (
    <div className="planet" key={planet.name}>
      <div className="planetName">Information about planet {planet.name}</div>
      <ul className="listOfPlanets">
        <li>Gravity: {planet.gravity}</li>
        <li>Climate: {planet.climate}</li>
        <li>Diameter:  {planet.diameter}</li>
        <li>Population: {planet.population}</li>
        <li>Rotation period: {planet.rotation_period} </li>
        <li>Surface: {planet.surface_water} </li>
      </ul>
    </div>
  );

};

export default Planets;

