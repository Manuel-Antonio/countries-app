import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CountryItemComponent } from './country-item/country-item.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { FormsModule } from '@angular/forms';
import { CountryDetailsComponent } from './country-details/country-details.component';


@NgModule({
  declarations: [
    SidebarComponent,
    CountryItemComponent,
    SearchItemsComponent,
    CountryDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports: [
    SidebarComponent,
    CountryItemComponent,
    SearchItemsComponent,
    CountryDetailsComponent
  ]
})
export class SharedModule { }
