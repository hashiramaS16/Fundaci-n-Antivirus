import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Pages/Components/nav-bar/nav-bar.component';
import { ButtonWompiComponent } from './Pages/Components/button-wompi/button-wompi.component';
<<<<<<< HEAD
import { ButtonWhatsappComponent } from './Pages/Components/button-whatsapp/button-whatsapp.component';
import { FooterComponent } from './Pages/Components/footer/footer.component';
=======
import { SectionAboutInfoComponent } from './Pages/Fundación/Components/section-about-info/section-about-info.component';
import { HeroComponent } from './Pages/Fundación/Components/hero/hero.component';

>>>>>>> feature/crear-seccion-hero


@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, NavBarComponent, ButtonWompiComponent, FooterComponent, ButtonWhatsappComponent],
=======
  imports: [RouterOutlet, NavBarComponent, ButtonWompiComponent, SectionAboutInfoComponent, HeroComponent],
>>>>>>> feature/crear-seccion-hero
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  title = 'FundacionAntivirus';
}