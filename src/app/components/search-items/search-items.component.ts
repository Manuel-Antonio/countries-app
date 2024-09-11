import {
  Component,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  ContinentImg,
  continentsImgs,
} from 'src/app/data/continents-imgs.data';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css'],
})
export class SearchItemsComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  countryName: string = '';
  continentsImg: ContinentImg[] = [];
  isDropdownVisible = false;
  dropdownClicked = false;
  selectedContinents: Set<string> = new Set();

  @Output() dataFilters = new EventEmitter<any>();

  constructor(private countryService: CountryService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.continentsImg = continentsImgs;
    this.subscription = this.countryService
      .getLetterSelected()
      .subscribe((data) => {
        if (data) {
          this.countryName = '';
          this.selectedContinents.clear();
        }
      });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-menu') && !target.closest('input')) {
      this.isDropdownVisible = false;
    }
  }

  toggleDropdown(show: boolean) {
    this.isDropdownVisible = show;
  }

  clearAll() {
    this.countryName = '';

    this.toggleDropdown(false);
    this.selectedContinents.clear();
    this.onSubmit();
    this.countryService.setLetterSelected('A');
  }

  toggleSelection(continentCode: string) {
    if (this.selectedContinents.has(continentCode)) {
      this.selectedContinents.delete(continentCode);
    } else {
      this.selectedContinents.add(continentCode);
    }
  }

  isSelected(continentCode: string): boolean {
    return this.selectedContinents.has(continentCode);
  }

  onSubmit() {
    const countryNameSearch = this.countryName
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
    this.countryService.setLetterSelected('');
    let capitalizedCountryName = '';
    if (countryNameSearch) {
      capitalizedCountryName =
        countryNameSearch.charAt(0).toUpperCase() + countryNameSearch.slice(1);
    }

    this.dataFilters.emit({
      countryName: capitalizedCountryName,
      selectedContinents: Array.from(this.selectedContinents),
    });
  }
}
