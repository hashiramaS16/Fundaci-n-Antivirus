import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelateComponent } from './nivelate.component';

describe('NivelateComponent', () => {
  let component: NivelateComponent;
  let fixture: ComponentFixture<NivelateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
