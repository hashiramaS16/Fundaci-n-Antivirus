import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Pages/Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Pages/Components/footer/footer.component';
import { ButtonWompiComponent } from './Pages/Components/button-wompi/button-wompi.component';


@Component({
  selector: 'app-root',
  standalone: true,
   imports: [RouterOutlet, NavBarComponent,ButtonWompiComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected from styleUrl to styleUrls
})
export class AppComponent {
  title = 'FundacionAntivirus';
}