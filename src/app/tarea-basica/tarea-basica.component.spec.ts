import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaBasicaComponent } from './tarea-basica.component';

describe('TareaBasicaComponent', () => {
  let component: TareaBasicaComponent;
  let fixture: ComponentFixture<TareaBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaBasicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
