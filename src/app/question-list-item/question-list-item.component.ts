import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../model/Question";


@Component({
  selector: 'app-question-list-item',
  templateUrl: './question-list-item.component.html',
  styleUrls: ['./question-list-item.component.css']
})
export class QuestionListItemComponent implements OnInit {

  @Input() question!: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
