import { Injectable } from '@angular/core';
import {Question} from "../../model/Question";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private static readonly QestionsURL = 'http://localhost:3000/questions';

  constructor(private http: HttpClient) {
  }

  loadQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(QuestionService.QestionsURL);
  }

  submitQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(QuestionService.QestionsURL, question);
  }
}
