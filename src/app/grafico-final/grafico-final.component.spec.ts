import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFinalComponent } from './grafico-final.component';

describe('GraficoFinalComponent', () => {
  let component: GraficoFinalComponent;
  let fixture: ComponentFixture<GraficoFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
