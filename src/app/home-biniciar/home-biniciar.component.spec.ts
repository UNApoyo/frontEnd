import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBIniciarComponent } from './home-biniciar.component';

describe('HomeBIniciarComponent', () => {
  let component: HomeBIniciarComponent;
  let fixture: ComponentFixture<HomeBIniciarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBIniciarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBIniciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
