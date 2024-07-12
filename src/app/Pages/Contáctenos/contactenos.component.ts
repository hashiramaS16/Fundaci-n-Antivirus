import { Component } from '@angular/core';
import { HeroComponent } from '../Oportunidades/Pages/Contáctenos/Components/hero/hero.component';

@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './contactenos.component.html',
  styleUrl: './contactenos.component.css'
})
export class ContactenosComponent {

}
