import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RecaptchaModule} from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PocetnaComponent } from './komponente/pocetna/pocetna.component';
import { LoginComponent } from './komponente/login/login.component';
import { RegistracijaComponent } from './komponente/registracija/registracija.component';
import { HederComponent } from './komponente/heder/heder.component';
import { KorisnikService } from './servisi/korisnik.service';
import { LoginService } from './servisi/login.service';
import { PreduzeceComponent } from './komponente/preduzece/preduzece.component';
import { PoljoprivrednikComponent } from './komponente/poljoprivrednik/poljoprivrednik.component';
import { PregledRasadnikaComponent } from './komponente/pregled-rasadnika/pregled-rasadnika.component';
import { AdminComponent } from './komponente/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    LoginComponent,
    RegistracijaComponent,
    HederComponent,
    PreduzeceComponent,
    PoljoprivrednikComponent,
    PregledRasadnikaComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RecaptchaModule.forRoot(),
  ],
  providers: [KorisnikService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
