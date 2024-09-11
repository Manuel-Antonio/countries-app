import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';
import { bgByCode } from 'src/app/utils/util-simple';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css'],
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  countryDetail?: Country;
  statesText: string = '';

  subscription!: Subscription;

  constructor(private countryService: CountryService) {
    this.subscription = this.countryService
      .getCountryDetailSelected()
      .subscribe((result) => {
        this.countryDetail = result;
        if (this.countryDetail?.states) {
          this.statesText = this.countryDetail.states
            .map((state) => state.name)
            .join('\n');
        }
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {}
  getImageFlagByCode(code: string) {
    const codeLower = code.toLowerCase();
    return `https://flagcdn.com/64x48/${codeLower}.png`;
  }

  badgeContinent(code: string): string {
    return bgByCode(code);
  }
}
