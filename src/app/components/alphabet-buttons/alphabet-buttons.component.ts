import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-alphabet-buttons',
  templateUrl: './alphabet-buttons.component.html',
  styleUrls: ['./alphabet-buttons.component.css']
})
export class AlphabetButtonsComponent implements OnInit {
  @Output() letterSelected = new EventEmitter<string>();
  selectedLetter: string | null = null;
  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  onLetterClick(letter: string) {
    this.selectedLetter = letter;
    this.letterSelected.emit(letter);
  }

  isSelected(letter: string): boolean {
    return this.selectedLetter === letter;
  }
}
