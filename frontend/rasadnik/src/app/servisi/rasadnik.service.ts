import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RasadnikService {

  uri = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  dohvatiRasadnikeZaPoljoprivrednika(idPoljoprivrednika){
    const data = {
      idPoljoprivrednika: idPoljoprivrednika
    }

    return this.http.post(`${this.uri}/dohvatiRasadnikeZaPoljoprivrednika`, data);
  }

  dohvatiRasadnikId(id){
    console.log(id);
    const data = {
      id: id
    }

    return this.http.post(`${this.uri}/dohvatiRasadnikId`, data);
  }
}
