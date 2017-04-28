import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-results-tinfo',
  templateUrl: './results-tinfo.component.html',
  styleUrls: ['./results-tinfo.component.css']
})
export class ResultsTinfoComponent implements OnInit {
  tipo1 = "Matematicas";
  tipologias1;
  tipo2 = "Probabilidad y Estadistica";
  tipologias2;
  constructor(private http: Http) {
    http.get('http://localhost:3000/asignaturas/porcentaje_area/1/1/1.json')
      .subscribe(res => this.tipologias1 = res.json());
    http.get('http://localhost:3000/asignaturas/porcentaje_area/1/1/2.json')
      .subscribe(res => this.tipologias2 = res.json());
  }



  ngOnInit() {
  }
}
