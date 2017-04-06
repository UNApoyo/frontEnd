import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAndresComponent } from './contact-andres.component';

describe('ContactAndresComponent', () => {
  let component: ContactAndresComponent;
  let fixture: ComponentFixture<ContactAndresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAndresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAndresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
