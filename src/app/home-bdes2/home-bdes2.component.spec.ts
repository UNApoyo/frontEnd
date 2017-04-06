import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBdes2Component } from './home-bdes2.component';

describe('HomeBdes2Component', () => {
  let component: HomeBdes2Component;
  let fixture: ComponentFixture<HomeBdes2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBdes2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBdes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
