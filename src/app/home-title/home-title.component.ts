import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.css']
})
export class HomeTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Un Apoyo';
  description1 = '¿Te sientes perdido?';
  description2 = '¿No sabes que rumbo tomar?';
  description3 = '¡¡Dejanos ayudarte!! UN Apoyo';
  description4 = 'te ayudará a retomar tu rumbo';
  que_es = "¿Que es UN Apoyo?";
  que_es1 = "Descripción";
  que_es2 = "Basándonos en tus notas y materias, nuestra aplicacion te ayudará\
  a descubrir en cual campo deberias enfocarte entre otros consejos.";
  facil = "Tan facil como 1, 2, 3";
  desFacil1 = "1. Entra a tu historia académica.";
  desFacil2 = "2. Copia y pega el contenido en nuestra apliación";
  desFacil3 = "3. Observa tu respuesta.";
  recomendaciones = "Recomendaciones";
  recomendacion = "Te recomendamos materias, postgrados, opción de grado y grupos de\
   investigación";
  contacto= "Información de contacto";
  visualiza = "Mira tu información";
  vi1 = "- Porcentaje que llevas en componente fundamentación, disciplinar y \
  libre elección.";
  vi2 = "- Mira las áreas en las que necesitas más dedicación.";
  vi3 = "- Cuantos semestres te faltan para graduarte según tu rendimiento";
}
