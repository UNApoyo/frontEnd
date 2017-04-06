import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBody1Component } from './home-body1.component';

describe('HomeBody1Component', () => {
  let component: HomeBody1Component;
  let fixture: ComponentFixture<HomeBody1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBody1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBody1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
