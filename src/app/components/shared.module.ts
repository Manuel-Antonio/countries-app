import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CountryItemComponent } from './country-item/country-item.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { FormsModule } from '@angular/forms';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { AlphabetButtonsComponent } from './alphabet-buttons/alphabet-buttons.component';
import { LoaderComponent } from './loader/loader.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent,
    CountryItemComponent,
    SearchItemsComponent,
    CountryDetailsComponent,
    AlphabetButtonsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
     
  ],
  exports: [
    SidebarComponent,
    CountryItemComponent,
    SearchItemsComponent,
    CountryDetailsComponent,
    AlphabetButtonsComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
