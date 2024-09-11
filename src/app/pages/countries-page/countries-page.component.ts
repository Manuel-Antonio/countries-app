import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { Subscription } from 'apollo-angular';
import { Subscribable } from 'rxjs';
import { Country, CountryModel } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';
import { PixabayService } from 'src/app/services/pixabay.service';

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
    this.getDataContries([], 'A', '^', 'nin');
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

  selectedCountryItem(codeCountry:string) {
    this.countryService.setIsCountryItemSelected(codeCountry);
  }
  getDataFilter(dataFilter: any) {
    let optionModified = '';
    if (
      dataFilter.selectedContinents.length > 0 ||
      dataFilter.countryName != ''
    ) {
      optionModified = 'in';
    } else {
      optionModified = 'nin';
    }
    this.getDataContries(
      dataFilter.selectedContinents,
      dataFilter.countryName,
      '',
      optionModified
    );
  }

  getDataContries(
    continent: string[],
    letter: string,
    location: string,
    option: string
  ) {
    this.countryService
      .filtersCountries(continent, letter, location, option)
      .subscribe((result: CountryModel) => {
        this.countries = result.data.countries;
      });
  }

  getLetterSelected(letterSelected: string) {
    this.getDataContries([], letterSelected, '^', 'nin');
  }
}
