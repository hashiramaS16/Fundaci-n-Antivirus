import { Component } from '@angular/core';
import { ContactenosComponent } from './Pages/Contáctenos/contactenos.component';
import { NoticiasComponent } from './Pages/Noticias/noticias.component';

@Component({
  selector: 'app-oportunidades',
  standalone: true,
  imports: [ContactenosComponent],
  templateUrl: './oportunidades.component.html',
  styleUrl: './oportunidades.component.css'
})
export class OportunidadesComponent {

}
