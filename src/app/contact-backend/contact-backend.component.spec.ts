import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBackendComponent } from './contact-backend.component';

describe('ContactBackendComponent', () => {
  let component: ContactBackendComponent;
  let fixture: ComponentFixture<ContactBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
