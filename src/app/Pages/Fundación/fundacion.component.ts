import { Component } from '@angular/core';
import { GallerySectionSlideComponent } from "./Components/gallery-section-slide/gallery-section-slide.component";
import { HeroComponent } from "../Oportunidades/Pages/Cont\u00E1ctenos/Components/hero/hero.component";
import { InfoCompanyComponent } from "./Components/info-company/info-company.component";
import { SectionAboutInfoComponent } from "./Components/section-about-info/section-about-info.component";
import { SectionVideoComponent } from "./Components/section-video/section-video.component";

@Component({
  selector: 'app-fundacion',
  standalone: true,
  imports: [GallerySectionSlideComponent, HeroComponent, InfoCompanyComponent, SectionAboutInfoComponent, SectionVideoComponent],
  templateUrl: './fundacion.component.html',
  styleUrl: './fundacion.component.css'
})
export class FundacionComponent {

}
