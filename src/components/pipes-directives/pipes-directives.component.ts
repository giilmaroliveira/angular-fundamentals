import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-directives',
  templateUrl: './pipes-directives.component.html',
  styleUrls: ['./pipes-directives.component.css'],
})
export class PipesDirectivesComponent implements OnInit {
  title = 'Conhecendo Pipes no Angular';

  exampleText = 'Trabalhando com pipes';

  currentDate = new Date();

  showText = true;

  studentsList = [
    { id: 1, name: 'Hermes' },
    { id: 2, name: 'Cláudia' },
    { id: 3, name: 'Alan' },
    { id: 4, name: 'Danilo' },
    { id: 5, name: 'Gilmar' }
  ];

  status = 0;

  constructor() {}

  ngOnInit(): void {}
}
