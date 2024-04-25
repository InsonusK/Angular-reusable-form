import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComplexFormMainComponent } from './reusable-complex-form-main/reusable-complex-form-main.component';
import { ReusableFormComponent } from './reusable-form/reusable-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';
import { TemplateFormComponent } from './template-form/template-form.component';



@NgModule({
  exports: [
    ReusableComplexFormMainComponent
  ],
  declarations: [
    ReusableComplexFormMainComponent,
    ReusableFormComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: []
})
export class ReusableComplexFormModule { }
