import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySectionSlideComponent } from './gallery-section-slide.component';

describe('GallerySectionSlideComponent', () => {
  let component: GallerySectionSlideComponent;
  let fixture: ComponentFixture<GallerySectionSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallerySectionSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerySectionSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
