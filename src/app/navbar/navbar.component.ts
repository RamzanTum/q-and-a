import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() loginClicked = new EventEmitter();

  showHiddenMenu = false;
  isUserLoggedIn = false;

  ngOnInit(): void {
  }

  toggleNavbarElements() {
    this.showHiddenMenu = !this.showHiddenMenu;
  }

  onLoginButtonClicked() {
    this.isUserLoggedIn = true;
    this.loginClicked.emit();
  }

  onLogoutButtonClicked() {
    this.isUserLoggedIn = false;
  }
}
