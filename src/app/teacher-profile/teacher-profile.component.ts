import {Component, Input} from '@angular/core';
import {Teacher} from "../model/Teacher";
import {Question} from "../model/Question";
import {QuestionService} from "../service/question/question.service";

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent {
  @Input() teacher!: Teacher;
  question = '';
  submitSuccess = false;
  submitError = false;

  constructor(private questionService: QuestionService) { }

  submitQuestion() {
    this.questionService
      .submitQuestion({
        question: this.question
      } as Question)
      .subscribe({
        next: () => {
          this.submitSuccess = true;
          this.question = '';
        },
        error: () => {
          this.submitError = true;
        },
      });
  }
}
