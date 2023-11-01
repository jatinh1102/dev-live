import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyExploreComponent } from './case-study-explore.component';

describe('CaseStudyExploreComponent', () => {
  let component: CaseStudyExploreComponent;
  let fixture: ComponentFixture<CaseStudyExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyExploreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudyExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
