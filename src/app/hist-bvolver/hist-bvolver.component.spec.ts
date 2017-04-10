import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistBvolverComponent } from './hist-bvolver.component';

describe('HistBvolverComponent', () => {
  let component: HistBvolverComponent;
  let fixture: ComponentFixture<HistBvolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistBvolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistBvolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
