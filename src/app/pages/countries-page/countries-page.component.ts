import { Component, OnInit } from '@angular/core';
import { CountryModel } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css'],
})
export class CountriesPageComponent implements OnInit {
  countries: any[] = [];

  term: string = '';
  imagenesList: any[] = [];
  totalImage: number = 0;
  isValidResult: boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.getDataCountries([], 'A', '^', 'nin');
  }

  onCountrySelected(data: { code: string; image: string }) {
    this.selectedCountryItem(data.code);
    this.countryService
      .getCountryByCode(data.code)
      .subscribe((result: CountryModel) => {
        this.countryService.setCountryDetailSelected(
          result.data.countries[0],
          data.image
        );
      });
  }

  selectedCountryItem(codeCountry: string) {
    this.countryService.setIsCountryItemSelected(codeCountry);
  }
  getDataFilter(dataFilter: any) {
    let optionModified = '';
    const {countryName, selectedContinents} = dataFilter;
    let countryNameSearch = countryName;
    let matchPattern = '';

    if (dataFilter.countryName && selectedContinents.length === 0) {
      optionModified = 'nin';
      matchPattern = '';
    } else if (selectedContinents.length > 0) {
      optionModified = 'in';
      matchPattern = dataFilter.countryName ? '' : '^';
    } else {
     
      optionModified = 'nin';
      countryNameSearch = 'A'; 
      matchPattern = '^';
    }

    this.getDataCountries(
      selectedContinents,
      countryNameSearch,
      matchPattern,
      optionModified
    );
  }

  getDataCountries(
    continent: string[],
    letter: string,
    locationLetter: string,
    conditional: string
  ) {
    this.countryService
      .filtersCountries(continent, letter, locationLetter, conditional)
      .subscribe((result: CountryModel) => {
        this.countries = result.data.countries;
      });
  }

  getLetterSelected(letterSelected: string) {
    this.getDataCountries([], letterSelected, '^', 'nin');
  }
}
