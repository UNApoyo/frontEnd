import { async, ComponentFixture, TestBed } from '@angular/core/testing';



describe('HistBaconsejameComponent', () => {
  let component: HistBaconsejameComponent;
  let fixture: ComponentFixture<HistBaconsejameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistBaconsejameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistBaconsejameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
