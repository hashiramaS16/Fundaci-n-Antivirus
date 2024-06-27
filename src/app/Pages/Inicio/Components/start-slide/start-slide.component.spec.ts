import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSlideComponent } from './start-slide.component';

describe('StartSlideComponent', () => {
  let component: StartSlideComponent;
  let fixture: ComponentFixture<StartSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
