import { Component } from '@angular/core';
import { ContentComponent } from './Components/content/content.component';
import { BDComponent } from './Components/Formulario/bd.component';
import { HeroComponent } from './Components/hero/hero.component';

@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [ContentComponent, BDComponent, HeroComponent],
  templateUrl: './contactenos.component.html',
  styleUrl: './contactenos.component.css'
})
export class ContactenosComponent {

}
