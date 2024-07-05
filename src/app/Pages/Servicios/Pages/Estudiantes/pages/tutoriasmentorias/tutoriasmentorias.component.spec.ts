import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoriasmentoriasComponent } from './tutoriasmentorias.component';

describe('TutoriasmentoriasComponent', () => {
  let component: TutoriasmentoriasComponent;
  let fixture: ComponentFixture<TutoriasmentoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutoriasmentoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoriasmentoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
