import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAppsAdminComponent } from './all-apps-admin.component';

describe('AllAppsAdminComponent', () => {
  let component: AllAppsAdminComponent;
  let fixture: ComponentFixture<AllAppsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAppsAdminComponent]
    });
    fixture = TestBed.createComponent(AllAppsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
