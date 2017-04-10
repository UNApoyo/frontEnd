import { Component, OnInit } from '@angular/core';
import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";

import { ContactenosComponent } from "../contactenos/contactenos.component";

const contactRoute: Routes = [
  { path: 'contact', component: ContactenosComponent}
];

@Component({
  selector: 'app-home-bcontacto',
  templateUrl: './home-bcontacto.component.html',
  styleUrls: ['./home-bcontacto.component.css']

})

@NgModule({
  imports:[
    RouterModule.forRoot(contactRoute)
  ]
})

export class HomeBcontactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
