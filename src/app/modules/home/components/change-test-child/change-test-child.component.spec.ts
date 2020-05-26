import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTestChildComponent } from './change-test-child.component';

describe('ChangeTestChildComponent', () => {
  let component: ChangeTestChildComponent;
  let fixture: ComponentFixture<ChangeTestChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTestChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
