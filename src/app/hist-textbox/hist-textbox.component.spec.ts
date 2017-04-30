import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('HistTextboxComponent', () => {
  let component: HistTextboxComponent;
  let fixture: ComponentFixture<HistTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
