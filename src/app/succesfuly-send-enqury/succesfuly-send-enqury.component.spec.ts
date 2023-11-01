import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfulySendEnquryComponent } from './succesfuly-send-enqury.component';

describe('SuccesfulySendEnquryComponent', () => {
  let component: SuccesfulySendEnquryComponent;
  let fixture: ComponentFixture<SuccesfulySendEnquryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccesfulySendEnquryComponent]
    });
    fixture = TestBed.createComponent(SuccesfulySendEnquryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
