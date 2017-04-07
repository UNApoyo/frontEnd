import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { Home1Component } from './home1/home1.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { HomeBIniciarComponent } from './home-biniciar/home-biniciar.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HomeBotitleComponent } from './home-botitle/home-botitle.component';
import { HomeBody1Component } from './home-body1/home-body1.component';
import { FooterComponent } from './footer/footer.component';
import { HomeBdes1Component } from './home-bdes1/home-bdes1.component';
import { HomeBdes2Component } from './home-bdes2/home-bdes2.component';
import { HomeBdes3Component } from './home-bdes3/home-bdes3.component';
import { HomeBdes4Component } from './home-bdes4/home-bdes4.component';
import { ContactDianaComponent } from './contact-diana/contact-diana.component';
import { ContactAndresComponent } from './contact-andres/contact-andres.component';
import { ContactSebastianComponent } from './contact-sebastian/contact-sebastian.component';
import { ContactCristianComponent } from './contact-cristian/contact-cristian.component';
import { ContactJohnComponent } from './contact-john/contact-john.component';
import { ContactBackendComponent } from './contact-backend/contact-backend.component';
import { ContactFrontendComponent } from './contact-frontend/contact-frontend.component';
import { HomeBcontactoComponent } from './home-bcontacto/home-bcontacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTitleComponent,
    ContactenosComponent,
    Home1Component,
    HomeComponent,
    LogoComponent,
    HomeBIniciarComponent,
    HomeBodyComponent,
    HomeBotitleComponent,
    HomeBody1Component,
    FooterComponent,
    HomeBdes1Component,
    HomeBdes2Component,
    HomeBdes3Component,
    HomeBdes4Component,
    ContactDianaComponent,
    ContactAndresComponent,
    ContactSebastianComponent,
    ContactCristianComponent,
    ContactJohnComponent,
    ContactBackendComponent,
    ContactFrontendComponent,
    HomeBcontactoComponent
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
