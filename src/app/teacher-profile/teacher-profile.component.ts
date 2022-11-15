import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from "../model/Teacher";

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {
  @Input() teacher!: Teacher;
  question = '';
  submitSuccess = false;
  submitError = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitQuestion() {

  }
}
