import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTextImageComponent } from './start-text-image.component';

describe('StartTextImageComponent', () => {
  let component: StartTextImageComponent;
  let fixture: ComponentFixture<StartTextImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartTextImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartTextImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
