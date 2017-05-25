import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";


@Component({
  selector: 'app-results-tinfo',
  templateUrl: './results-tinfo.component.html',
  styleUrls: ['./results-tinfo.component.css'],
})


export class ResultsTinfoComponent implements OnInit {

  promAreas;
  porTipos;
  constructor(private http: Http) {
    http.get('http://localhost:3000/areas/porcentajes?estudiante_id=1&carrera_id=1&sort=-porcentajes')
      .subscribe(res => this.promAreas = res.json());

    http.get('http://localhost:3000/asignaturas/porcentaje?carrera_id=1&estudiante_id=1&sort=tipologia')
      .subscribe(res => this.porTipos = res.json());
  }


  ngOnInit() {
  }
}
