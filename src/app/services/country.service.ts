import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countryDetailSelected$ = new Subject<Country>();

  constructor(private apollo: Apollo) {}

  setCountryDetailSelected(value: Country, image: string): void {
    
    this.countryDetailSelected$.next({
      ...value,
      imageUrl: image
    });
  }
  getCountryDetailSelected(): Observable<Country> {
    return this.countryDetailSelected$.asObservable();
  }

  filtersCountries(
    continent: string[],
    letter: string,
    location: string,
    option: string
  ): Observable<any> {
    return this.apollo.query({
      query: gql`
        query {
          countries(
            filter: { continent: { ${option}:${JSON.stringify(
        continent
      )} }, name: { regex: "${location + letter}" } }
          ) {
            name
            code
            continent {
              name
            }
          }
        }
      `,
    });
  }

  getCountryByCode(code: string): Observable<any> {
    return this.apollo.query({
      query: gql`
        query {
          countries(filter: { code: { eq: "${code}" } }) {
            name
            code
            continent {
              name
            }
            capital
            languages {
              name
            }
            currencies
            states {
              name
            }
          }
        }
      `,
    });
  }

  getContinets(): Observable<any> {
    return this.apollo.query({
      query: gql`
        query {
          continents {
            name
            code
          }
        }
      `,
    });
  }
}
