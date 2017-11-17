import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewansComponent } from './newans.component';

describe('NewansComponent', () => {
  let component: NewansComponent;
  let fixture: ComponentFixture<NewansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
