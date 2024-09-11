import { continentsImgs } from "../data/continents-imgs.data";

export function badgeContinentName(codeContinent :string): string {
    const continents = continentsImgs.map(({ code }) => code);
    
    switch (codeContinent) {
      case continents[0]:
        return 'bg-primary';
      case continents[1]:
        return 'bg-secondary';
      case continents[2]:
        return 'bg-success';
      case continents[3]:
        return 'bg-info';
      case continents[4]:
        return 'bg-warning';
      case continents[5]:
        return 'bg-danger';
      case continents[6]:
        return 'bg-dark';
      default:
        return 'bg-light';
    }
  }