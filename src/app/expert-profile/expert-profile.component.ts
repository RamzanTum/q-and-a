import {Component, Input, OnInit} from '@angular/core';
import {Expert} from "../model/Expert";

@Component({
  selector: 'app-expert-profile',
  templateUrl: './expert-profile.component.html',
  styleUrls: ['./expert-profile.component.css']
})
export class ExpertProfileComponent implements OnInit {
  @Input() expert!: Expert;
  question = '';
  submitSuccess = false;
  submitError = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitQuestion() {

  }
}
