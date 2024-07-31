import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Pages/Components/nav-bar/nav-bar.component';
import { ButtonWompiComponent } from './Pages/Components/button-wompi/button-wompi.component';
import { SectionAboutInfoComponent } from './Pages/Fundación/Components/section-about-info/section-about-info.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent,ButtonWompiComponent,SectionAboutInfoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  title = 'FundacionAntivirus';
}