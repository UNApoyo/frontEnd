import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-results-tinfo',
  templateUrl: './results-tinfo.component.html',
  styleUrls: ['./results-tinfo.component.css']
})
export class ResultsTinfoComponent implements OnInit {

  areasProm;
  test = [[25.0,["Matematicas"]],[-1,["Probabilidad y Estadistica"]],
  [-1,["Ciencias de la Computacion"]],[-1,["Fisica"]],
  [-1,["Ciencias Economicas y Administrativas"]],
  [0.0,["Metodos y Tecnologias de Software"]],
  [33.33333333333333,["Infraestructura comput de com y de inf"]],
  [-1,["Computacion aplic e inteligencia comput"]],[-1,[]],
  [-1,["Sistemas Modelos Optimizacion y Simulacion"]],
  [-1,["Contexto prof y Proyectos de Ingenieria"]],
  [-1,[]],[0.0,["Quimica y Biologia"]],[-1,["Expresion Grafica"]]];
  constructor(private http: Http) {
    http.get('http://localhost:3000/areas/porcentajes?estudiante_id=1&carrera_id=1.json')
      .subscribe(areasProm => this.areasProm = areasProm.json());
      console.info(this.areasProm);
  }



  ngOnInit() {
  }
}
