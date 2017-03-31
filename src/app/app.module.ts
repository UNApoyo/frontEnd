import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { ContactenosComponent } from './contactenos/contactenos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTitleComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
