import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulturiasYProyectosComponent } from './consulturias-y-proyectos.component';

describe('ConsulturiasYProyectosComponent', () => {
  let component: ConsulturiasYProyectosComponent;
  let fixture: ComponentFixture<ConsulturiasYProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsulturiasYProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulturiasYProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
