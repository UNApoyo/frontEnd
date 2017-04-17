import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsBterminarComponent } from './results-bterminar.component';

describe('ResultsBterminarComponent', () => {
  let component: ResultsBterminarComponent;
  let fixture: ComponentFixture<ResultsBterminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsBterminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsBterminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
