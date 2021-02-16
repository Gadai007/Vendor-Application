import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierVendorRequestComponent } from './carrier-vendor-request.component';

describe('CarrierVendorRequestComponent', () => {
  let component: CarrierVendorRequestComponent;
  let fixture: ComponentFixture<CarrierVendorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierVendorRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierVendorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
