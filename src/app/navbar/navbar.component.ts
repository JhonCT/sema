import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ecos: string[] = [`eco 1927`, `eco 1928`, `eco 1930`,`eco 1931`]

  constructor() { }

  ngOnInit() {
  }

}
