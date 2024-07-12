import { Component } from '@angular/core';
import { StartTextImageComponent } from './Components/start-text-image/start-text-image.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [StartTextImageComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
