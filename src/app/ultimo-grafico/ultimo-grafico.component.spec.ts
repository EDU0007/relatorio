import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoGraficoComponent } from './ultimo-grafico.component';

describe('UltimoGraficoComponent', () => {
  let component: UltimoGraficoComponent;
  let fixture: ComponentFixture<UltimoGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimoGraficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
