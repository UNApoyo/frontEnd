import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDianaComponent } from './contact-diana.component';

describe('ContactDianaComponent', () => {
  let component: ContactDianaComponent;
  let fixture: ComponentFixture<ContactDianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
