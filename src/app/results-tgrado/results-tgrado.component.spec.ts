import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTgradoComponent } from './results-tgrado.component';

describe('ResultsTgradoComponent', () => {
  let component: ResultsTgradoComponent;
  let fixture: ComponentFixture<ResultsTgradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsTgradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
