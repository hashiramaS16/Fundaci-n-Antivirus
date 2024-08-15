import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageNoticiasComponent } from './text-image-noticias.component';

describe('TextImageNoticiasComponent', () => {
  let component: TextImageNoticiasComponent;
  let fixture: ComponentFixture<TextImageNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImageNoticiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImageNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
