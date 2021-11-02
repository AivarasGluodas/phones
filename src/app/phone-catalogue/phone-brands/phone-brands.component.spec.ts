import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBrandsComponent } from './phone-brands.component';

describe('PhoneBrandsComponent', () => {
  let component: PhoneBrandsComponent;
  let fixture: ComponentFixture<PhoneBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PhoneBrandsComponent', () => {
    expect(component).toBeTruthy();
  });
});
