import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Pages/Components/nav-bar/nav-bar.component';
import { ButtonWhatsappComponent } from './Pages/Components/button-whatsapp/button-whatsapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent, ButtonWhatsappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FundacionAntivirus';
}
