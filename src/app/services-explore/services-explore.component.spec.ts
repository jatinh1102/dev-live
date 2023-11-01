import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesExploreComponent } from './services-explore.component';

describe('ServicesExploreComponent', () => {
  let component: ServicesExploreComponent;
  let fixture: ComponentFixture<ServicesExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesExploreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
