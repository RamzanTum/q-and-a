import {Component, Input, OnInit} from '@angular/core';
import {Expert} from "../model/Expert";

@Component({
  selector: 'app-expert-list-item',
  templateUrl: './expert-list-item.component.html',
  styleUrls: ['./expert-list-item.component.css']
})
export class ExpertListItemComponent implements OnInit {
  @Input() expert!: Expert;
  constructor() { }

  ngOnInit(): void {
  }

}
