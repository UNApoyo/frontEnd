import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-results-tenfoque',
  templateUrl: './results-tenfoque.component.html',
  styleUrls: ['./results-tenfoque.component.css']
})
export class ResultsTenfoqueComponent implements OnInit {

  sug;
  constructor(private http: Http) {

    http.get('http://localhost:3000/enfoques/enfoque_asignatura?estudiante_id=1&carrera_id=1')
      .subscribe(res => this.sug = res.json());
  }

  ngOnInit() {
  }

}
