import { Component } from '@angular/core';
import { AcompanamientosOrientacionComponent } from './pages/acompanamientos-orientacion/acompanamientos-orientacion.component';
import { GruposDeEstudiosComponent } from './pages/grupos-de-estudios/grupos-de-estudios.component';
import { NivelateComponent } from './pages/nivelate/nivelate.component';
import { TutoriasmentoriasComponent } from './pages/tutoriasmentorias/tutoriasmentorias.component';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [AcompanamientosOrientacionComponent,GruposDeEstudiosComponent,NivelateComponent,TutoriasmentoriasComponent],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent {

}
