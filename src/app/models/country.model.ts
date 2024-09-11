import { Continent } from "./continent.model";

export interface CountryModel {
    data: DataCountry;
}
export interface DataCountry {
    countries: Country[];
}
export interface Country {
    name?:       string;
    code?:       string;
    continent?:  Continent;
    capital?:    string;
    languages?:  Continent[];
    currencies?: string[];
    states?:     any[];
    imageUrl?:   string;
}


