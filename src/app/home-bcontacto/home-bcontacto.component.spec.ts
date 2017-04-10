import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBcontactoComponent } from './home-bcontacto.component';

describe('HomeBcontactoComponent', () => {
  let component: HomeBcontactoComponent;
  let fixture: ComponentFixture<HomeBcontactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBcontactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
