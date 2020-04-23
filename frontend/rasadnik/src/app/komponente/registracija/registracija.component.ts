import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/servisi/korisnik.service';
import { Korisnik } from 'src/app/modeli/korisnik.model';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  podaciSpremni:boolean = false;
  tip:string;
  ime: string;
  prezime: string;
  username: string;
  password: string;
  passwordAgain: string;
  datum: string;
  mesto: string;
  telefon: string;
  mail: string;

  poruka: string;
  adminRegistracija: boolean;

  constructor(private router: Router, private service: KorisnikService) { }

  ngOnInit() {
    const currentUsename = localStorage.getItem("username");

    if (currentUsename) {
      this.service.dohvatiKorisnikaUsername(currentUsename).subscribe((korisici: Korisnik) => {
        if (korisici[0].tip == "admin") {
          this.adminRegistracija = true;

        } else {
          this.router.navigate(['/pocetna']);
        }
      })

    }

    this.tip = "poljoprivrednik";
    this.podaciSpremni = true;
  }

  tipPoljoprivrednik(){
    this.tip = "poljoprivrednik";
  }

  tipPreduzece(){
    this.tip = "preduzece";
  }

  registruj() {
    this.poruka = '';

    if(this.tip == 'poljoprivrednik'){
      if(!this.username || !this.password || !this.passwordAgain || !this.ime || !this.prezime || !this.datum || !this.mesto || !this.telefon || !this.mail){
        this.poruka = "Popunite sva polja!";
        return;
      }
    }else{
      if(!this.username || !this.password || !this.passwordAgain || !this.ime || !this.datum || !this.mesto || !this.mail){
        this.poruka = "Popunite sva polja!";
        return;
      }
    }

    if(this.password != this.passwordAgain){
      this.poruka = "Lozinke nisu iste!";
      return;
    }

    let regexPassword = /^(?=.*[A-Z])[a-zA-Z](?=.*\d)(?=.*[%*#?&@$!])[A-Za-z\d%*#?&@$!]{7,}$/;
    if(! regexPassword.test(this.password)){
      this.poruka = "Lozinka nije u odgovarajucem formatu!";
      return;
    }

    if(this.tip == 'poljoprivrednik'){
      console.log(this.telefon);
      let regexPhone = /^[\d]+$/;
      if(! regexPhone.test(this.telefon)){
        this.poruka = "Telefon je u losem formatu!";
        return;
      }
    }
    
    this.service.dohvatiKorisnikaUsername(this.username).subscribe((korisici: Korisnik) => {
      if (korisici[0]) {
        this.poruka = "Korisnicko ime vec postoji!";
        return;
      } else {

        this.service.kreirajKorisnika(this.username, this.password, this.ime, this.tip).subscribe((id: number) => {
          if(this.tip == 'poljoprivrednik'){
            this.service.kreirajPoljoprivrednika(id, this.ime, this.prezime, this.datum, this.mesto, this.telefon, this.mail).subscribe((ok: boolean) => {
              if(!this.adminRegistracija){
                this.router.navigate(['/login']);
              }
            })
          }
          if(this.tip == 'preduzece'){
            this.service.kreirajPreduzece(id, this.ime, this.datum, this.mesto, this.mail).subscribe((ok: boolean) => {
              if(!this.adminRegistracija){
                this.router.navigate(['/login']);
              }
            })
          }

        })
      }
      
    })

  }

}

