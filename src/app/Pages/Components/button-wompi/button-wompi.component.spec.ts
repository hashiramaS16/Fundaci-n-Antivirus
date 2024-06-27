import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWompiComponent } from './button-wompi.component';

describe('ButtonWompiComponent', () => {
  let component: ButtonWompiComponent;
  let fixture: ComponentFixture<ButtonWompiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonWompiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWompiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
