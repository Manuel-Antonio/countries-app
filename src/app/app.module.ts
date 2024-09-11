import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http'; // Asegúrate de que este módulo esté instalado
import { InMemoryCache } from '@apollo/client/core'; // Desde @apollo/client/core
import { SharedModule } from './components/shared.module';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,  // ApolloModule para la integración con Angular
    SharedModule   // Cualquier otro módulo compartido
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),  // Configuración de cache
          link: httpLink.create({ uri: 'https://countries.trevorblades.com/' }) // URI de la API GraphQL
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
