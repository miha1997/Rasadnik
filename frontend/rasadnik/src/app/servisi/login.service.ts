import { Output, EventEmitter } from '@angular/core';
import { Korisnik } from '../modeli/korisnik.model';

export class LoginService{
    @Output() posaljiLoginKorisnik: EventEmitter<any> = new EventEmitter<any>();
    
    loginKorisnik(korisnik: Korisnik) {
        this.posaljiLoginKorisnik.emit(korisnik);
    }
   
    getEmitter() {
      return this.posaljiLoginKorisnik;
    }
  }