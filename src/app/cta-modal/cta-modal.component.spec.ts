import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaModalComponent } from './cta-modal.component';

describe('CtaModalComponent', () => {
  let component: CtaModalComponent;
  let fixture: ComponentFixture<CtaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
