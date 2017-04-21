import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTenfoqueComponent } from './results-tenfoque.component';

describe('ResultsTenfoqueComponent', () => {
  let component: ResultsTenfoqueComponent;
  let fixture: ComponentFixture<ResultsTenfoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsTenfoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTenfoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
