import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { Country, CountryModel } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';
import { PixabayService } from 'src/app/services/pixabay.service';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css']
})
export class CountriesPageComponent implements OnInit {
  countries: any[] = [];

  term: string = "";
  imagenesList: any[] = [];
  totalImage : number = 0;
  isValidResult : boolean = false;

  // totalImagenes : number = 0;
  // paginaActual : number = 1;
  // imagenesPorPagina : number = 3;
  // totalPaginas : number = 0;

  constructor(
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.countryService.filtersCountries([""],"","","nin").subscribe((result: CountryModel) => {
      this.countries = result.data.countries.slice(0,20);
    });
  }

  onCountrySelected(data : {code: string, image:string}) {
    
   this.countryService.getCountryByCode(data.code).subscribe((result : CountryModel) => {
    this.countryService.setCountryDetailSelected(result.data.countries[0], data.image);
   });
  }

  getDataFilter(dataFilter : any) {
    let optionModified = "in";
    if(dataFilter.selectedContinents == "" || dataFilter.countryName == "") {
      optionModified = "nin";
      console.log("Ahora es nin")
    }else {
      console.log("Ahora es in")

    }
    this.countryService.filtersCountries(dataFilter.selectedContinents, dataFilter.countryName,"",optionModified).subscribe((result: CountryModel) => {
      this.countries = result.data.countries.slice(0,20);
    });
  }

  // // PAGINADO ----------
  // calcularTotalPaginas() {
  //   this.totalPaginas =  Math.ceil(this.totalImagenes / this.imagenesPorPagina );
  // }

  // anteriorPagina() {
  //   if(this.paginaActual === 1) {
  //     return;
  //   }
  //   this.paginaActual--;
  //   // this.obtenerImagenes(this.term, this.imagenesPorPagina, this.paginaActual);
  // }
  // siguientePagina() {
  //   if(this.paginaActual === this.totalPaginas) {
  //     return;
  //   }
  //   this.paginaActual++;
  //   // this.obtenerImagenes(this.term, this.imagenesPorPagina, this.paginaActual);
  // }


}
