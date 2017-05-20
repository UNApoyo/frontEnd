import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { Home1Component } from './home1/home1.component';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { HomeBIniciarComponent } from './home-biniciar/home-biniciar.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { FooterComponent } from './footer/footer.component';
import { ContactDianaComponent } from './contact-diana/contact-diana.component';
import { ContactAndresComponent } from './contact-andres/contact-andres.component';
import { ContactSebastianComponent } from './contact-sebastian/contact-sebastian.component';
import { ContactCristianComponent } from './contact-cristian/contact-cristian.component';
import { ContactJohnComponent } from './contact-john/contact-john.component';
import { ContactBackendComponent } from './contact-backend/contact-backend.component';
import { ContactFrontendComponent } from './contact-frontend/contact-frontend.component';
import { HomeBcontactoComponent } from './home-bcontacto/home-bcontacto.component';
import { HistoriaComponent } from './historia/historia.component';
import { HistBaconsejameComponent } from './hist-baconsejame/hist-baconsejame.component';
import { HistBvolverComponent } from './hist-bvolver/hist-bvolver.component';
import { HistTextboxComponent } from './hist-textbox/hist-textbox.component';
import { HistDescriptionComponent } from './hist-description/hist-description.component';
import { ResultsComponent } from './results/results.component';
import { ResultsBterminarComponent } from './results-bterminar/results-bterminar.component';
import { ResultsTabComponent } from './results-tab/results-tab.component';
import { ResultsTrecomendacionComponent } from './results-trecomendacion/results-trecomendacion.component';
import { ResultsTgradoComponent } from './results-tgrado/results-tgrado.component';
import { ResultsTenfoqueComponent } from './results-tenfoque/results-tenfoque.component';
import { ResultsTinfoComponent } from './results-tinfo/results-tinfo.component';
import { ChartsModule } from "ng2-charts";


const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Contact', component: ContactenosComponent},
  { path: 'Historia', component: HistoriaComponent},
  { path: 'Results', component: ResultsComponent},
  { path: '', redirectTo: '/Home', pathMatch:'full'}

];


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
    FooterComponent,
    ContactDianaComponent,
    ContactAndresComponent,
    ContactSebastianComponent,
    ContactCristianComponent,
    ContactJohnComponent,
    ContactBackendComponent,
    ContactFrontendComponent,
    HomeBcontactoComponent,
    HistoriaComponent,
    HistBaconsejameComponent,
    HistBvolverComponent,
    HistTextboxComponent,
    HistDescriptionComponent,
    ResultsComponent,
    ResultsBterminarComponent,
    ResultsTabComponent,
    ResultsTrecomendacionComponent,
    ResultsTgradoComponent,
    ResultsTenfoqueComponent,
    ResultsTinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
