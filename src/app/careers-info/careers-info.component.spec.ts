import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersInfoComponent } from './careers-info.component';

describe('CareersInfoComponent', () => {
  let component: CareersInfoComponent;
  let fixture: ComponentFixture<CareersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
