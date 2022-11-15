import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBrowserComponent } from './teacher-browser.component';

describe('TeacherBrowserComponent', () => {
  let component: TeacherBrowserComponent;
  let fixture: ComponentFixture<TeacherBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherBrowserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
