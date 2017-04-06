import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBdes3Component } from './home-bdes3.component';

describe('HomeBdes3Component', () => {
  let component: HomeBdes3Component;
  let fixture: ComponentFixture<HomeBdes3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBdes3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBdes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
