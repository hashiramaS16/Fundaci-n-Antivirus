import { Component } from '@angular/core';
import { AnalisisDeDatosComponent } from './Pages/Analisis de Datos/analisis-de-datos.component';
import { ApoyoEmocionalComponent } from './Pages/Apoyo Emocional/apoyo-emocional.component';
import { ComunicacionesComponent } from './Pages/Comunicaciones/comunicaciones.component';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './Components/hero/hero.component';
import { ContentComponent } from './Components/content/content.component';

@Component({
  selector: 'app-que-hacemos',
  standalone: true,
  imports: [AnalisisDeDatosComponent, ApoyoEmocionalComponent, ComunicacionesComponent, RouterOutlet,HeroComponent,ContentComponent],
  templateUrl: './que-hacemos.component.html',
  styleUrl: './que-hacemos.component.css'
})
export class QueHacemosComponent {

}
