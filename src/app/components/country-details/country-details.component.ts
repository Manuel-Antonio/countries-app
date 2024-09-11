import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';
import { badgeContinentName } from 'src/app/utils/util-simple';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  countryDetail ?: Country;
  statesText: string = '';

  constructor(private countryService: CountryService) { 
    this.countryService.getCountryDetailSelected().subscribe(result => {
      this.countryDetail = result;
      
      if (this.countryDetail?.states) {
        this.statesText = this.countryDetail.states.map(state => state.name).join('\n');
      }
    });
    
  }

  ngOnInit() {
    
  }
  getImageFlagByCode(code: string) {
    const codeLower = code.toLowerCase();
    return `https://flagcdn.com/64x48/${codeLower}.png`;
  }

  badgeContinent(code :string): string {
    return badgeContinentName(code);
  }


}
