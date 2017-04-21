import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTinfoComponent } from './results-tinfo.component';

describe('ResultsTinfoComponent', () => {
  let component: ResultsTinfoComponent;
  let fixture: ComponentFixture<ResultsTinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsTinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
