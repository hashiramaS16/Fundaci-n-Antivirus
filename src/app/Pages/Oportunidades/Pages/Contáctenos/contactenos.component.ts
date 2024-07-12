import { Component } from '@angular/core';
import { HeroComponent } from './Components/hero/hero.component';
import { BDComponent } from './Components/Formulario/bd.component';
import { ContentComponent } from './Components/content/content.component';

@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [HeroComponent,BDComponent,ContentComponent],
  templateUrl: './contactenos.component.html',
  styleUrl: './contactenos.component.css'
})
export class ContactenosComponent {

}
