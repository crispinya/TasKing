import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaPersonalizadaComponent } from './tarea-personalizada.component';

describe('TareaPersonalizadaComponent', () => {
  let component: TareaPersonalizadaComponent;
  let fixture: ComponentFixture<TareaPersonalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaPersonalizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
