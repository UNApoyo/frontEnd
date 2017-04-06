import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-diana',
  templateUrl: './contact-diana.component.html',
  styleUrls: ['./contact-diana.component.css']
})
export class ContactDianaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nombre = "Diana Navarrete";
  correo = "dcnavarreter@unal.edu.co";
}
