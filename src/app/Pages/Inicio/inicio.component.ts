import { Component } from '@angular/core';
import { StartFormComponent } from './Components/start-paragraph/start-form.component';
import { StartSlideComponent } from './Components/start-slide/start-slide.component';
import { StartTextImageComponent } from './Components/start-text-image/start-text-image.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [StartFormComponent,StartSlideComponent,StartTextImageComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
