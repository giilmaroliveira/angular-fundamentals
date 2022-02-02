import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  myName = 'Gilmar';
  imageUrl = 'https://picsum.photos/id/211/600/400';
  name = 'Gilmar Oliveira';

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    console.log('Executando método do TS');
  }

  showName(): void {
    window.alert(this.name);
  }
}
