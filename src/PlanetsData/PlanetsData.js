import "./PlanetsData.css";

const Planets = (props) => {

    let planet = props.planets;

  return (
    <div className="planet" key={planet.name}>
      <div className="planetName">Information about planet <span>{planet.name}</span></div>
      <ul className="listOfPlanets">
        <li>Gravity:<span> {planet.gravity}</span></li>
        <li>Climate: <span>{planet.climate}</span></li>
        <li>Diameter: <span> {planet.diameter}</span></li>
        <li>Population: <span>{planet.population}</span></li>
        <li>Rotation period:<span> {planet.rotation_period} </span></li>
        <li>Surface: <span>{planet.surface_water}</span> </li>
      </ul>
    </div>
  );

};

export default Planets;

