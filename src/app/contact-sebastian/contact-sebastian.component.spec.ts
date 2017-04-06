import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSebastianComponent } from './contact-sebastian.component';

describe('ContactSebastianComponent', () => {
  let component: ContactSebastianComponent;
  let fixture: ComponentFixture<ContactSebastianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSebastianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSebastianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
