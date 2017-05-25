import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-john',
  templateUrl: './contact-john.component.html',
  styleUrls: ['./contact-john.component.css']
})
export class ContactJohnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nombre = "John Hernandez";
  correo = "joahernandezca@unal.edu.co";
}
