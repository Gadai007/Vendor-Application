import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorUpdateUnblockComponent } from './vendor-update-unblock.component';

describe('VendorUpdateUnblockComponent', () => {
  let component: VendorUpdateUnblockComponent;
  let fixture: ComponentFixture<VendorUpdateUnblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorUpdateUnblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorUpdateUnblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
