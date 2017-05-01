import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-results-tinfo',
  templateUrl: './results-tinfo.component.html',
  styleUrls: ['./results-tinfo.component.css']
})
export class ResultsTinfoComponent implements OnInit {

  areasProm;

  constructor(private http: Http) {
    http.get('http://localhost:3000/areas/porcentajes?estudiante_id=1&carrera_id=1.json')
      .subscribe(areasProm => this.areasProm = areasProm.json());

      console.info(this.areasProm);
  }



  ngOnInit() {
  }
}
