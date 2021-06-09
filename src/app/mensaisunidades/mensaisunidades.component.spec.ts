import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MENSAISUNIDADESComponent } from './mensaisunidades.component';

describe('MENSAISUNIDADESComponent', () => {
  let component: MENSAISUNIDADESComponent;
  let fixture: ComponentFixture<MENSAISUNIDADESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MENSAISUNIDADESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MENSAISUNIDADESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
