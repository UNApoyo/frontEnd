import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-bdes1',
  templateUrl: './home-bdes1.component.html',
  styleUrls: ['./home-bdes1.component.css']
})
export class HomeBdes1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  que_es1 = "Descripción";
  que_es2 = "Basándonos en tus notas y materias, nuestra aplicacion te ayudará\
  a descubrir en cual campo deberias enfocarte entre otros consejos.";
}
