import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllAppsComponent } from './show-all-apps.component';

describe('ShowAllAppsComponent', () => {
  let component: ShowAllAppsComponent;
  let fixture: ComponentFixture<ShowAllAppsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllAppsComponent]
    });
    fixture = TestBed.createComponent(ShowAllAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
