import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveInAngularComponent } from './directive-in-angular.component';

describe('DirectiveInAngularComponent', () => {
  let component: DirectiveInAngularComponent;
  let fixture: ComponentFixture<DirectiveInAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveInAngularComponent]
    });
    fixture = TestBed.createComponent(DirectiveInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
