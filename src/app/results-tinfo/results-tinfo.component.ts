import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-results-tinfo',
  templateUrl: './results-tinfo.component.html',
  styleUrls: ['./results-tinfo.component.css']
})
export class ResultsTinfoComponent implements OnInit {

  promAreas;

  constructor(private http: Http) {
    http.get('http://localhost:3000/areas/porcentajes?estudiante_id=1&carrera_id=1.json')
      .subscribe(res => this.promAreas = res.json());

  }

  public bdata:any[]=[
    {data: [1 ,2 ,3], label: 'Porcentajes'}
    ];

  public blabels:string[]=['uno','dos','tres'];

  public boptions:any={
    scaleShowVerticalLines:false,
    responsive:true
  }

  public blegend:boolean=true;

  public btype:string='bar';



  ngOnInit() {
  }
}
