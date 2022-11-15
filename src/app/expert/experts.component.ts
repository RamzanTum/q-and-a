import { Component, OnInit } from '@angular/core';
import {ExpertsService} from "../service/experts/experts.service";
import {Observable, of, tap} from "rxjs";
import {Expert} from "../model/Expert";

@Component({
  selector: 'app-expert',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {
  experts: Observable<Expert[]> = of([]);
  selectedExpert!: Expert;

  constructor(private expertsService: ExpertsService) { }

  ngOnInit(): void {
    this.experts = this.expertsService.loadExperts().pipe(tap(data=> this.selectedExpert = data[0]));
  }
}
