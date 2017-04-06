import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCristianComponent } from './contact-cristian.component';

describe('ContactCristianComponent', () => {
  let component: ContactCristianComponent;
  let fixture: ComponentFixture<ContactCristianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCristianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCristianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
