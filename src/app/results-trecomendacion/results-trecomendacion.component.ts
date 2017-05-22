import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-results-trecomendacion',
  templateUrl: './results-trecomendacion.component.html',
  styleUrls: ['./results-trecomendacion.component.css']
})
export class ResultsTrecomendacionComponent implements OnInit {

  promAreas;
  promTipos;
  constructor(private http: Http) {
  http.get('http://localhost:3000/historia_academicas/promedio_area?carrera_id=1&estudiante_id=1&sort=-promedio')
    .subscribe(res => this.promAreas = res.json());

  http.get('http://localhost:3000/historia_academicas/promedio_tipologia?estudiante_id=1&sort=tipologia')
    .subscribe(res => this.promTipos = res.json());

  }

  ngOnInit() {
  }

}
