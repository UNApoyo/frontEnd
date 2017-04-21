import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTrecomendacionComponent } from './results-trecomendacion.component';

describe('ResultsTrecomendacionComponent', () => {
  let component: ResultsTrecomendacionComponent;
  let fixture: ComponentFixture<ResultsTrecomendacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsTrecomendacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTrecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
