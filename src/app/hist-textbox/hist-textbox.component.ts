import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';


declare var leerHistoria: any;
@Component({
  selector: 'app-hist-textbox',
  templateUrl: './hist-textbox.component.html',
  styleUrls: ['./hist-textbox.component.css']
})

export class HistTextboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  historiaText: string;
  historializar(){
      console.log(leerHistoria(this.historiaText));


  }
}
