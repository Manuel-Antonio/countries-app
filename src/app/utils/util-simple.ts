import { continentsImgs } from '../data/continents-imgs.data';

export function bgByCode(valueCode: string): string {
  const continents = continentsImgs.map(({ code }) => code);

  switch (valueCode) {
    case continents[0]:
      return 'bg-primary';
    case continents[1]:
      return 'bg-secondary text-dark';
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

export function getImageFlagByCode(code: string) : string {
  const codeLower = code.toLowerCase();
  return `https://flagcdn.com/64x48/${codeLower}.png`;
}
