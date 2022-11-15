import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListItemComponent } from './teacher-list-item.component';

describe('TeacherListItemComponent', () => {
  let component: TeacherListItemComponent;
  let fixture: ComponentFixture<TeacherListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
