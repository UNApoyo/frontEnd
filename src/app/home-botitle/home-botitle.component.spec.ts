import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBotitleComponent } from './home-botitle.component';

describe('HomeBotitleComponent', () => {
  let component: HomeBotitleComponent;
  let fixture: ComponentFixture<HomeBotitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBotitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBotitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
