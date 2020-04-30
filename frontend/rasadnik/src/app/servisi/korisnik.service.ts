import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {
  uri = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  dohvatiKorisnikaUsername(username){
    const data = {
      username: username
    }

    return this.http.post(`${this.uri}/dohvatiKorisnikaUsername`, data);
  }

  kreirajKorisnika(username, password, ime, tip){
    const data = {
      username: username,
      password : password,
      ime : ime,
      tip: tip
    }

    return this.http.post(`${this.uri}/unesiKorisnika`, data);
  }

  kreirajPoljoprivrednika(id, ime, prezime, datum, mesto, telefon, mail){
    const data = {
      id: id,
      ime : ime,
      prezime : prezime,
      datum: datum,
      mesto : mesto,
      telefon : telefon,
      mail: mail
    }

    return this.http.post(`${this.uri}/unesiPoljoprivrednika`, data);
  }

  kreirajPreduzece(id, naziv, datum, mesto, mail){
    const data = {
      id: id,
      naziv : naziv,
      datum : datum,
      mesto: mesto,
      mail: mail
    }

    return this.http.post(`${this.uri}/unesiPreduzece`, data);
  }

  dohvatiKorisnikaUsernamePassword(username, password){
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/dohvatiKorisnikaUsernamePassword`, data);
  }

}
