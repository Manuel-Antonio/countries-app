import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';
import { PixabayService } from 'src/app/services/pixabay.service';
import { bgByCode, getImageFlagByCode } from 'src/app/utils/util-simple';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css'],
})
export class CountryItemComponent implements OnInit, OnDestroy {
  @Input() country!: Country;
  @Output() selected = new EventEmitter<{ code: string; image: string }>();
  subscription!: Subscription;

  isSelected: boolean = false;
  flagUrl: string = '';
  isSelectedCountryItem: boolean = false;
  constructor(
    private pixabayService: PixabayService,
    private countryService: CountryService
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.getImageByName(`country ${this.country.name}`);
    this.selectedCountryItem();
  }

  selectedCountryItem() {
    this.countryService.getIsCountryItemSelected().subscribe((letter) => {
      if (this.country.code == letter) {
        this.isSelectedCountryItem = !this.isSelectedCountryItem;
      } else {
        this.isSelectedCountryItem = false;
      }
    });
  }

  getImageFlagByCode(code: string): string {
    return getImageFlagByCode(code);
  }

  getImageByName(value: string) {
    this.subscription = this.pixabayService
      .getImagenes(value, 3, 1)
      .subscribe((urlImagen) => {
        if (urlImagen) {
          this.flagUrl = urlImagen;
        } else {
          this.flagUrl = '';
        }
      });
  }

  selectedCountryByCode() {
    this.selected.emit({
      code: this.country.code || '',
      image: this.flagUrl,
    });
  }

  badgeContinent(code: string): string {
    return bgByCode(code);
  }
}
