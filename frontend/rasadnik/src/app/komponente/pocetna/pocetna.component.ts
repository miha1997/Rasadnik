import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/servisi/korisnik.service';
import { Korisnik } from 'src/app/modeli/korisnik.model';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {
  podaciSpremni:boolean = false;

  constructor(private router: Router, private service: KorisnikService) { }

  ngOnInit() {
    const currentUsename = localStorage.getItem("username");

    if (currentUsename) {
      this.service.dohvatiKorisnikaUsername(currentUsename).subscribe((korisici: Korisnik) => {
        console.log(korisici.tip);

        if (korisici[0].tip == "poljoprivrednik") {
          this.router.navigate(['/poljoprivrednik']);
        
        } else if(korisici[0].tip == "preduzece"){
          this.router.navigate(['/preduzece']);
        
        }else{
          
          this.router.navigate(['/admin']);
        }
      })

    }

    this.podaciSpremni = true;
  }

}


