import { Component } from '@angular/core';
import { ReactiveFormControl } from './reactive-form.control';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  logForm() {
    console.log(this.reactiveFormControl)
  }
  reactiveFormControl = new ReactiveFormControl(this.fb);
  constructor(private fb: FormBuilder) {

  }
}
