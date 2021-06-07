import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroGraficoComponent } from './primeiro-grafico.component';

describe('PrimeiroGraficoComponent', () => {
  let component: PrimeiroGraficoComponent;
  let fixture: ComponentFixture<PrimeiroGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiroGraficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
