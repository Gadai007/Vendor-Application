import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorUpdateRequestComponent } from './vendor-update-request.component';

describe('VendorUpdateRequestComponent', () => {
  let component: VendorUpdateRequestComponent;
  let fixture: ComponentFixture<VendorUpdateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorUpdateRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorUpdateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
