import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposAlertaComponent } from './tipos-alerta.component';

describe('TiposAlertaComponent', () => {
  let component: TiposAlertaComponent;
  let fixture: ComponentFixture<TiposAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposAlertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
