import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/servisi/korisnik.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {
  podaciSpremni:boolean = false;

  constructor(private router: Router, private service: KorisnikService) { }

  ngOnInit() {
    this.podaciSpremni = true;

    console.log("ej ej");
  }

}


