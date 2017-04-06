import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFrontendComponent } from './contact-frontend.component';

describe('ContactFrontendComponent', () => {
  let component: ContactFrontendComponent;
  let fixture: ComponentFixture<ContactFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
