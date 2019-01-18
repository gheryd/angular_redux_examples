import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleEventsComponent } from './example-events.component';

describe('ExampleEventsComponent', () => {
  let component: ExampleEventsComponent;
  let fixture: ComponentFixture<ExampleEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
