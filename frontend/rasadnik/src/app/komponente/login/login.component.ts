import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/servisi/korisnik.service';
import { Korisnik } from 'src/app/modeli/korisnik.model';
import { LoginService } from 'src/app/servisi/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  podaciSpremni:boolean = false;
  username : string;
  password : string;
  poruka : string;
  
  constructor(private router: Router, private service: KorisnikService, private loginService : LoginService) { }

  ngOnInit() {
    const currentUsename = localStorage.getItem("username");

    if(currentUsename)
      this.router.navigate(['/pocetna']);
    
    this.podaciSpremni = true;
      
  }

  login(){
    if(!this.username){
      this.poruka = "Unesite korisnicko ime!";
      return;
    }

    if(!this.password){
      this.poruka = "Unesite lozinku!";
      return;
    }

    this.service.dohvatiKorisnikaUsernamePassword(this.username, this.password).subscribe((korisnici: Korisnik) => {
      if(korisnici[0] != null){
        if(korisnici[0].status != 'aktivan'){
          this.poruka = "Vasa registracija ceka potvrdu!";
          return;
        }

        localStorage.setItem("username", korisnici[0].username);
        
        this.loginService.posaljiLoginKorisnik.emit(korisnici[0]);

        if(korisnici[0].tip == 'admin') this.router.navigate(['/admin']);
        else if(korisnici[0].tip == 'poljoprivrednik') this.router.navigate(['/poljoprivrednik']);
        else this.router.navigate(['/preduzece']);
      }else{

        this.service.dohvatiKorisnikaUsername(this.username).subscribe((korisnici: Korisnik) => {
          if(korisnici[0] == null){
            this.password = null;
            this.username = null;
            this.poruka = "Ne postoji taj korisnik!";
          }else{
            this.password = null;
            this.poruka = "Pogresna loznika!";
          }
        })
      }
    })
  }

}
