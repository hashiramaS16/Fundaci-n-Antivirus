import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisDeDatosComponent } from './analisis-de-datos.component';

describe('AnalisisDeDatosComponent', () => {
  let component: AnalisisDeDatosComponent;
  let fixture: ComponentFixture<AnalisisDeDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisisDeDatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisisDeDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
