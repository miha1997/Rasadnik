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

  getUserWithUsernamePassword(username, password){
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/getUserWithUsernamePassword`, data);
  }

  pacijent(kor_ime: string) {
    const data = {
      username: kor_ime
    }
    return this.http.post(`${this.uri}/pacijent`, data);
  }

  zubari() {
    return this.http.get(`${this.uri}/zubari`);
  }

  zubar(){
    const data = {
      username:localStorage.getItem("user")
    }
    return this.http.post(`${this.uri}/zubar`,data);
  }

  dodaj(pacijent, datum, zubar) {
    const data = {
      pacijent: pacijent,
      datum: datum,
      zubar: zubar
    };
    return this.http.post(`${this.uri}/dodaj`, data);
  }

  promeni(idP,status){
    const data ={
      idP:idP,
      status:status
    };
    console.log(data);
    
    return this.http.post(`${this.uri}/promeni`, data);
  }
}
