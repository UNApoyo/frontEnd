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
  title = 'Tan fácil como 1, 2, 3 y 4!';
  description1 = '1. Entra a tu SIA';
  description2 = '2. Copia tu Historia Académica (Ctrl A, Ctrl C)';
  description3 = '3. Pega en el cuadro de abajo (Ctrl V)';
  description4 = '4. Oprime Aconséjame y obtén tu resultado';
}
