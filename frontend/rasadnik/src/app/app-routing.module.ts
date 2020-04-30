import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaComponent } from './komponente/pocetna/pocetna.component';
import { LoginComponent } from './komponente/login/login.component';
import { RegistracijaComponent } from './komponente/registracija/registracija.component';
import { PoljoprivrednikComponent } from './komponente/poljoprivrednik/poljoprivrednik.component';
import { PreduzeceComponent } from './komponente/preduzece/preduzece.component';
import { PregledRasadnikaComponent } from './komponente/pregled-rasadnika/pregled-rasadnika.component';
import { AdminComponent } from './komponente/admin/admin.component';


const routes: Routes = [
  { path : "", component : PocetnaComponent},
  { path : "pocetna", component : PocetnaComponent},
  { path : "login", component : LoginComponent},
  { path : "registracija", component : RegistracijaComponent},
  { path : "poljoprivrednik", component : PoljoprivrednikComponent},
  { path : "preduzece", component : PreduzeceComponent},
  { path : "pregledRasadnika", component : PregledRasadnikaComponent},
  { path : "admin", component : AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
