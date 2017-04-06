import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBdes4Component } from './home-bdes4.component';

describe('HomeBdes4Component', () => {
  let component: HomeBdes4Component;
  let fixture: ComponentFixture<HomeBdes4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBdes4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBdes4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
