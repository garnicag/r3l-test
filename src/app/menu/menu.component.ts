import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  collapsedMenu = false;

  sideNavToggle() {
    this.collapsedMenu = !this.collapsedMenu;
  }

  constructor() { }

  ngOnInit() {
  }

}
