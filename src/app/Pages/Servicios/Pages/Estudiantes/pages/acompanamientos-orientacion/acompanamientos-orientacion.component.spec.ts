import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanamientosOrientacionComponent } from './acompanamientos-orientacion.component';

describe('AcompanamientosOrientacionComponent', () => {
  let component: AcompanamientosOrientacionComponent;
  let fixture: ComponentFixture<AcompanamientosOrientacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompanamientosOrientacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompanamientosOrientacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
