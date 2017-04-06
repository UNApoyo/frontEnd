import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-andres',
  templateUrl: './contact-andres.component.html',
  styleUrls: ['./contact-andres.component.css']
})
export class ContactAndresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nombre = "Andres Sanchez";
  correo = "andfsanchezlem@unal.edu.co";
}
