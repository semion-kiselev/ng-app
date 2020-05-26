import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKitComponent } from './update-kit.component';

describe('UpdateKitComponent', () => {
  let component: UpdateKitComponent;
  let fixture: ComponentFixture<UpdateKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
