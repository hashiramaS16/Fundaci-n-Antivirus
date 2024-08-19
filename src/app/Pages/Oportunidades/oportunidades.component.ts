import { Component } from '@angular/core';
import { ContactenosComponent } from './Pages/Contáctenos/contactenos.component';
import { NoticiasComponent } from './Pages/Noticias/noticias.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-oportunidades',
  standalone: true,
  imports: [ContactenosComponent,RouterOutlet],
  templateUrl: './oportunidades.component.html',
  styleUrl: './oportunidades.component.css'
})
export class OportunidadesComponent {

}
