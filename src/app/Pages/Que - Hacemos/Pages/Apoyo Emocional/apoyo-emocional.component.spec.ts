import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoEmocionalComponent } from './apoyo-emocional.component';

describe('ApoyoEmocionalComponent', () => {
  let component: ApoyoEmocionalComponent;
  let fixture: ComponentFixture<ApoyoEmocionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApoyoEmocionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoyoEmocionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
