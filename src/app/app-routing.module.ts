import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { Vista1PageComponent } from './pages/vista1-page/vista1-page.component';
import { Vista2PageComponent } from './pages/vista2-page/vista2-page.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'vista1',
    component: Vista1PageComponent,
  },
  {
    path: 'vista2',
    component: Vista2PageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
