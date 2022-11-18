import { Component, OnInit } from '@angular/core';
import {Question} from "../model/Question";
import {QuestionService} from "../service/question/question.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-question-browser',
  templateUrl: './question-browser.component.html',
  styleUrls: ['./question-browser.component.css']
})
export class QuestionBrowserComponent implements OnInit {
  questions$: Observable<Question[]> = of([]);
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questions$ = this.questionService.loadQuestions();
  }

}
