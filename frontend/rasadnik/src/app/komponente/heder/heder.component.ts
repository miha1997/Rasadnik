import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Korisnik } from 'src/app/modeli/korisnik.model';

import { KorisnikService } from 'src/app/servisi/korisnik.service';
import { LoginService } from 'src/app/servisi/login.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {
  korisnik : Korisnik;
  podaciSpremni:boolean = false;
  ulogovan: boolean = false;

  constructor(private router: Router, private service: KorisnikService, private loginService : LoginService) { }

  ngOnInit() {
    this.loginService.getEmitter().subscribe((pristigliKorisnik) => {
      this.korisnik = pristigliKorisnik;
      this.ulogovan = true;
    });

    let username = localStorage.getItem("username");
    
    this.service.dohvatiKorisnikaUsername(username).subscribe((korisnici: Korisnik) => {
      if(korisnici[0] == null){
        this.ulogovan = false;
      }else{
        this.korisnik = korisnici[0];
        this.ulogovan = true;
      }

      this.podaciSpremni = true;
    })

  }


  logout(){
    localStorage.removeItem("username");
    localStorage.setItem("green", "Uspešno ste se izlogovali!");
    this.ulogovan = false;
    this.router.navigate(['/pocetna']);
  }

}
