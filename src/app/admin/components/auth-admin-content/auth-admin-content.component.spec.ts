import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAdminContentComponent } from './auth-admin-content.component';

describe('AuthAdminContentComponent', () => {
  let component: AuthAdminContentComponent;
  let fixture: ComponentFixture<AuthAdminContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthAdminContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthAdminContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
