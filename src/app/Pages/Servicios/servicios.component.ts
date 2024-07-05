import { Component } from '@angular/core';
import { ConsulturiasYProyectosComponent } from './Pages/Consultorias y Proyectos/consulturias-y-proyectos.component';
import { EstudiantesComponent } from './Pages/Estudiantes/estudiantes.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ConsulturiasYProyectosComponent,EstudiantesComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
