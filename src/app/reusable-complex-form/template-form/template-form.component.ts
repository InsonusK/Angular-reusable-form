import { Component } from '@angular/core';
import { TemplateFormModel } from './template-form.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.sass'
})
export class TemplateFormComponent {
  onSubmit() {
    console.log(this.model)
  }
  model = new TemplateFormModel({city:"",street:"", house:0}, "");
}
