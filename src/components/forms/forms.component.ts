import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  registerForm!: FormGroup;

  countries = [
    { id: 1, name: 'Brasil' },
    { id: 2, name: 'Argentina' },
    { id: 3, name: 'Uruguai' },
    { id: 4, name: 'Chile' },
  ];

  ngOnInit(): void {
    const formDataStr = localStorage.getItem('form');

    if (formDataStr === null) {
      this.initForm();
    } else {
      const formData = JSON.parse(formDataStr);
      this.initForm(formData);
    }
  }

  onSubmit(): void {
    const formData = this.registerForm.value;
    localStorage.setItem('form', JSON.stringify(formData));
    console.log('Dados registrados no localStorage');
  }

  initForm(formData: any = {}): void {
    const { name, type, country, age } = formData;

    this.registerForm = this.formBuilder.group({
      name: name ? name : '',
      type: type ? type : null,
      country: country ? country : 0,
      age: age ? age : 0,
    });
  }

  clearLocalStorage(): void {
    localStorage.removeItem('form');
    // localStorage.clear(); // Remove todos itens do LocalStorage
  }
}
