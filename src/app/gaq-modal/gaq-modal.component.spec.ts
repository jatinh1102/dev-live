import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaqModalComponent } from './gaq-modal.component';

describe('GaqModalComponent', () => {
  let component: GaqModalComponent;
  let fixture: ComponentFixture<GaqModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaqModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaqModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
