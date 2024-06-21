import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboutInfoComponent } from './section-about-info.component';

describe('SectionAboutInfoComponent', () => {
  let component: SectionAboutInfoComponent;
  let fixture: ComponentFixture<SectionAboutInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionAboutInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAboutInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
