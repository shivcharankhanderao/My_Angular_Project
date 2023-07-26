import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersingupComponent } from './ownersingup.component';

describe('OwnersingupComponent', () => {
  let component: OwnersingupComponent;
  let fixture: ComponentFixture<OwnersingupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersingupComponent]
    });
    fixture = TestBed.createComponent(OwnersingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
