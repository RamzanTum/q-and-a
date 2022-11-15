import { Component, OnInit } from '@angular/core';
import {TeachersService} from "../service/teachers/teachers.service";
import {Observable, of, tap} from "rxjs";
import {Teacher} from "../model/Teacher";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teachers: Observable<Teacher[]> = of([]);
  selectedTeacher!: Teacher;

  constructor(private teachersService: TeachersService) { }

  ngOnInit(): void {
    this.teachers = this.teachersService.loadTeachers().pipe(tap(data=> this.selectedTeacher = data[0]));
  }
}
