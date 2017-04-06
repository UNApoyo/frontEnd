import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Un Apoyo';
  description1 = '¿Te sientes perdido?';
  description2 = '¿No sabes que rumbo tomar?';
  description3 = '¡¡Dejanos ayudarte!! UN Apoyo';
  description4 = 'te ayudará a retomar tu rumbo'; 
}
