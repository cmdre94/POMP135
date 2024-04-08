import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageViewTwoComponent } from './homepage-view-two.component';

describe('HomepageViewTwoComponent', () => {
  let component: HomepageViewTwoComponent;
  let fixture: ComponentFixture<HomepageViewTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageViewTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageViewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
