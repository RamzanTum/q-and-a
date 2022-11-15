import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Teacher} from "../../model/Teacher";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private static readonly TeachersURL = 'http://localhost:3000/teachers';

  constructor(private http: HttpClient) {
  }

  loadTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(TeachersService.TeachersURL);
  }
}
