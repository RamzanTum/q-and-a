import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  showDialog = false;

  loginUser() {
    this.showDialog = false;
  }

  hideForm() {
    this.showDialog = false;
  }
}
