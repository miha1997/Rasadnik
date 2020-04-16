import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaComponent } from './komponente/pocetna/pocetna.component';
import { LoginComponent } from './komponente/login/login.component';
import { RegistracijaComponent } from './komponente/registracija/registracija.component';


const routes: Routes = [
  { path : "", component : PocetnaComponent},
  { path : "pocetna", component : PocetnaComponent},
  { path : "login", component : LoginComponent},
  { path : "registracija", component : RegistracijaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
