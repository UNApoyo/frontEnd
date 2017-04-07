import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hist-description',
  templateUrl: './hist-description.component.html',
  styleUrls: ['./hist-description.component.css']
})
export class HistDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Tan facil como 1,2,3';
  description1 = '1. Entra a tu SIA';
  description2 = '2. Copia tu Historia Academica';
  description3 = '3. Pega en el cuadro de abajo';
  description4 = '4. Oprime Aconsejame y obten tu resultado'; 
}