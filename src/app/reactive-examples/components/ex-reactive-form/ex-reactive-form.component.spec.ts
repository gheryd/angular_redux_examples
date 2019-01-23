import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExReactiveFormComponent } from './ex-reactive-form.component';

describe('ExReactiveFormComponent', () => {
  let component: ExReactiveFormComponent;
  let fixture: ComponentFixture<ExReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
