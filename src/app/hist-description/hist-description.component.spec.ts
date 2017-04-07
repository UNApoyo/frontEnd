import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistDescriptionComponent } from './hist-description.component';

describe('HistDescriptionComponent', () => {
  let component: HistDescriptionComponent;
  let fixture: ComponentFixture<HistDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
