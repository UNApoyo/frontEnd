import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactJohnComponent } from './contact-john.component';

describe('ContactJohnComponent', () => {
  let component: ContactJohnComponent;
  let fixture: ComponentFixture<ContactJohnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactJohnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactJohnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
