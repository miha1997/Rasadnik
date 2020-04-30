import { Component, OnInit } from '@angular/core';
import { Rasadnik } from 'src/app/modeli/rasadnik.model';
import { Router } from '@angular/router';
import { RasadnikService } from 'src/app/servisi/rasadnik.service';

@Component({
  selector: 'app-pregled-rasadnika',
  templateUrl: './pregled-rasadnika.component.html',
  styleUrls: ['./pregled-rasadnika.component.css']
})
export class PregledRasadnikaComponent implements OnInit {
  podaciSpremni:boolean = false;
  rasadnik: Rasadnik;

  constructor(private router: Router, private servisRasadnik: RasadnikService) {
    
  }

  ngOnInit() {
    const rasadnikId = localStorage.getItem("rasadnikId");

    this.servisRasadnik.dohvatiRasadnikId(rasadnikId).subscribe((rasadnici: Rasadnik) => {
      this.rasadnik = rasadnici[0];
      this.podaciSpremni = true;
    })
  }

}
