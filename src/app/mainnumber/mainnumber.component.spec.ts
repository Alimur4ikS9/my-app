import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnumberComponent } from './mainnumber.component';

describe('MainnumberComponent', () => {
  let component: MainnumberComponent;
  let fixture: ComponentFixture<MainnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
