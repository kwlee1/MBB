import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewqComponent } from './newq.component';

describe('NewqComponent', () => {
  let component: NewqComponent;
  let fixture: ComponentFixture<NewqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
