import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoComponent } from './vendo.component';

describe('VendoComponent', () => {
  let component: VendoComponent;
  let fixture: ComponentFixture<VendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
