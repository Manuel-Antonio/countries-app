export interface ContinentModel {
  data: DataContinent;
}

export interface DataContinent {
  continents: Continent[];
}

export interface Continent {
  name?: string;
  code?: string;
}
