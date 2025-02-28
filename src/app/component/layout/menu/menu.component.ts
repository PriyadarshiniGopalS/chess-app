import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  isMenuOpen = false; // Menu is initially closed

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  ngOnInit(): void {
  }
}
