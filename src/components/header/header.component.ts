import { Component, OnInit } from '@angular/core';
import { RoutesEnum } from '../shared/routes.enum';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  routes = RoutesEnum;

  navItems = [
    { route: this.routes.HELLO_WORLD, text: 'Hello World' },
    { route: this.routes.BINDING, text: 'Binding' },
    { route: this.routes.PIPES_DIRECTIVES, text: 'Pipes e Diretivas' },
    { route: this.routes.FORMS, text: 'Forms' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
