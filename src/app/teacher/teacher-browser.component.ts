import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../service/teachers/teacher.service";
import {Observable, of, tap} from "rxjs";
import {Teacher} from "../model/Teacher";

@Component({
  selector: 'app-teacher-browser',
  templateUrl: './teacher-browser.component.html',
  styleUrls: ['./teacher-browser.component.css']
})
export class TeacherBrowserComponent implements OnInit {
  teachers: Observable<Teacher[]> = of([]);
  selectedTeacher!: Teacher;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teachers = this.teacherService.loadTeachers().pipe(tap(data=> this.selectedTeacher = data[0]));
  }
}
