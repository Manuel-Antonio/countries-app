import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { PixabayService } from 'src/app/services/pixabay.service';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css'],
})
export class CountryItemComponent implements OnInit {
  @Input() country!: Country;
  @Output() selected = new EventEmitter<{code: string, image:string}>();

  flagUrl: string = '';

  constructor(private pixabayService: PixabayService) {}

  ngOnInit() {
    this.getImageByName(`country ${this.country.name}`);
  }

  getImageFlagByCode(code: string) {
    const codeLower = code.toLowerCase();
    return `https://flagcdn.com/64x48/${codeLower}.png`;
  }

  getImageByName(value: string) {
    this.pixabayService
      .getImagenes(value,3,1)
      .subscribe((urlImagen) => {
        if (urlImagen) {
          this.flagUrl = urlImagen;
        } else {
          this.flagUrl = "";
        }
      });
  }

  selectedCountryByCode() {
    
    this.selected.emit({
      code: this.country.code || "", 
      image: this.flagUrl
    });
  }
}
