import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showHiddenMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbarElements() {
    this.showHiddenMenu = !this.showHiddenMenu;
  }
}
