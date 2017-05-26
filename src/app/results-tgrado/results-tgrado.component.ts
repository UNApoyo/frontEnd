import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-results-tgrado',
  templateUrl: './results-tgrado.component.html',
  styleUrls: ['./results-tgrado.component.css']
})
export class ResultsTgradoComponent implements OnInit {

  recom;
  constructor(private http: Http) {
  http.get('http://localhost:3000/historia_academicas/sugerencia_grado?estudiante_id=1&carrera_id=1')
    .subscribe(res => this.recom = res.json());
    
  }

  ngOnInit() {
  }

}
