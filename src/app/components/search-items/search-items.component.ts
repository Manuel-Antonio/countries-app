import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { ContinentImg, continentsImgs } from 'src/app/data/continents-imgs.data';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {
  countryName: string = "";
  continentsImg: ContinentImg[]  = [];
  isDropdownVisible = false;
  dropdownClicked = false;
  selectedContinents: Set<string> = new Set();

  @Output() dataFilters = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.continentsImg = continentsImgs
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-menu') && !target.closest('input')) {
      this.isDropdownVisible = false;
    }
  }

  onCountryInput(event: any) {
  }

  toggleDropdown(show: boolean) {
    this.isDropdownVisible = show;
  }

  clearAll() {
    this.countryName = "";
    this.toggleDropdown(false);
    this.selectedContinents.clear();
    this.onSubmit();
  }

  filterByContinent(continentCode: string) {
    console.log('Filtrar por continente:', continentCode);
    
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
   
    this.dataFilters.emit({
      countryName: this.countryName,
      selectedContinents: Array.from(this.selectedContinents)
    });
  }
}
