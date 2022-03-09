import { PlanetEntity } from "src/core/db/entities/PlanetEntity";
import { Planet } from "./Planet";

export class CreatePlanetResponse {
  public planet: Planet;

  constructor(planet: PlanetEntity) {
    this.planet = new Planet(planet.name, planet.mass);
  }
}