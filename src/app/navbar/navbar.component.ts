import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() loginClicked = new EventEmitter();

  showHiddenMenu = false;

  toggleNavbarElements() {
    this.showHiddenMenu = !this.showHiddenMenu;
  }

  onLoginButtonClicked() {
    this.loginClicked.emit();
  }
}
