import { Component } from '@angular/core';
import { TextImageNoticiasComponent } from './components/text-image-noticias/text-image-noticias.component';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [TextImageNoticiasComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {

}
