import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBdes1Component } from './home-bdes1.component';

describe('HomeBdes1Component', () => {
  let component: HomeBdes1Component;
  let fixture: ComponentFixture<HomeBdes1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBdes1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBdes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
