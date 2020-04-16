import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    LoginComponent,
    RegistracijaComponent,
    HederComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [KorisnikService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
