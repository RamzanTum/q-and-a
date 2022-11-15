import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from "../model/Teacher";

@Component({
  selector: 'app-teacher-list-item',
  templateUrl: './teacher-list-item.component.html',
  styleUrls: ['./teacher-list-item.component.css']
})
export class TeacherListItemComponent implements OnInit {
  @Input() teacher!: Teacher;
  constructor() { }

  ngOnInit(): void {
  }

}
