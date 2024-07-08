import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposDeEstudiosComponent } from './grupos-de-estudios.component';

describe('GruposDeEstudiosComponent', () => {
  let component: GruposDeEstudiosComponent;
  let fixture: ComponentFixture<GruposDeEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GruposDeEstudiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruposDeEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
