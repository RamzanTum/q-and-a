import {Injectable} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {Expert} from "../../model/Expert";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExpertsService {
  private static readonly ExpertsURL = 'http://localhost:3000/experts';

  constructor(private http: HttpClient) {
  }

  loadExperts(): Observable<Expert[]> {
    return this.http.get<Expert[]>(ExpertsService.ExpertsURL);
  }
}
