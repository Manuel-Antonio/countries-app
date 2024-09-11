import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countryDetailSelected$ = new Subject<Country>();
  isCountryItemSelected$ = new Subject<string>();
  letterSelected$ = new Subject<string>();

  constructor(private apollo: Apollo) {}

  setLetterSelected(letter: string): void {
    this.letterSelected$.next(letter);
  }
  getLetterSelected(): Observable<string> {
    return this.letterSelected$.asObservable();
  }

  setCountryDetailSelected(country: Country, image: string): void {
    this.countryDetailSelected$.next({
      ...country,
      imageUrl: image,
    });
  }
  getCountryDetailSelected(): Observable<Country> {
    return this.countryDetailSelected$.asObservable();
  }

  setIsCountryItemSelected(codeCountry: string): void {
    this.isCountryItemSelected$.next(codeCountry);
  }
  getIsCountryItemSelected(): Observable<string> {
    return this.isCountryItemSelected$.asObservable();
  }

  filtersCountries(
    continent: string[],
    letter: string,
    locationLetter: string,
    conditional: string
  ): Observable<any> {
    return this.apollo.query({
      query: gql`
        query {
          countries(
            filter: { continent: { ${conditional}: ${JSON.stringify(
        continent
      )} }, name: { regex: "${locationLetter + letter}" } }
          ) {
            name
            code
            continent {
              code
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
              code
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
