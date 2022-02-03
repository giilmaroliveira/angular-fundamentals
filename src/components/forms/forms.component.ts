import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    name: '',
    type: null,
    country: 0,
    age: 0
  });

  countries = [
    { id: 1, name: 'Brasil' },
    { id: 2, name: 'Argentina' },
    { id: 3, name: 'Uruguai' },
    { id: 4, name: 'Chile' }
  ];

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
  }

}
