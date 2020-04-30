import { Component, OnInit } from '@angular/core';
import { Rasadnik } from 'src/app/modeli/rasadnik.model';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/servisi/korisnik.service';
import { Korisnik } from 'src/app/modeli/korisnik.model';
import { RasadnikService } from 'src/app/servisi/rasadnik.service';

@Component({
  selector: 'app-poljoprivrednik',
  templateUrl: './poljoprivrednik.component.html',
  styleUrls: ['./poljoprivrednik.component.css']
})
export class PoljoprivrednikComponent implements OnInit {
  podaciSpremni:boolean = false;
  sviRasadnici: Array<Rasadnik>;
  korisnik: Korisnik;

  constructor(private router: Router, private servisKorisnik: KorisnikService, private servisRasadnik: RasadnikService) { }

  ngOnInit() {
    const currentUsename = localStorage.getItem("username");

    if(! currentUsename){
      this.router.navigate(['/pocetna']);
    }

    if (currentUsename) {
      this.servisKorisnik.dohvatiKorisnikaUsername(currentUsename).subscribe((korisici: Korisnik) => {
        if (korisici[0].tip != "poljoprivrednik") {
          this.router.navigate(['/pocetna']);
        } else {
          this.korisnik = korisici[0];

          this.servisRasadnik.dohvatiRasadnikeZaPoljoprivrednika(this.korisnik.id).subscribe((rasadnici: Rasadnik[]) => {
            this.sviRasadnici = rasadnici;
            this.podaciSpremni = true;

          })
          
        }
      })
    }

  }

  pogledajRasadnik(rasadnik){
    localStorage.setItem("rasadnikId", rasadnik.id);
    this.router.navigate(['/pregledRasadnika']);
  }

}
