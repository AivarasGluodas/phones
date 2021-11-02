import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCatalogueComponent } from './phone-catalogue.component';

describe('PhoneCatalogueComponent', () => {
  let component: PhoneCatalogueComponent;
  let fixture: ComponentFixture<PhoneCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
