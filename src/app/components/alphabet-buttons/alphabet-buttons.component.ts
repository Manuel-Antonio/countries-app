import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-alphabet-buttons',
  templateUrl: './alphabet-buttons.component.html',
  styleUrls: ['./alphabet-buttons.component.css'],
})
export class AlphabetButtonsComponent implements OnInit {
  @Output() letterSelected = new EventEmitter<string>();
  selectedLetter: string | null = null;
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.selectedLetter = "A";
    this.countryService.getLetterSelected().subscribe((letterData) => {
      this.selectedLetter = letterData;
    });
  }

  onLetterClick(letter: string) {
    this.countryService.setLetterSelected(letter);
    this.letterSelected.emit(letter);
  }

  isSelected(letter: string): boolean {
    return this.selectedLetter === letter;
  }
}
