import { Component, OnDestroy, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { ReusableFormControl } from './reusable-form.control';
import { Subject, takeUntil } from 'rxjs';
import { ReusableFormModel } from './reusable-form.model';

@Component({
  selector: 'app-reusable-form',
  templateUrl: './reusable-form.component.html',
  styleUrl: './reusable-form.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReusableFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ReusableFormComponent),
      multi: true,
    },
  ]
})
export class ReusableFormComponent implements ControlValueAccessor, Validator, OnDestroy {
  destroySubject = new Subject<void>();
  formControl = new ReusableFormControl(this.fb);
  
  constructor(private fb:FormBuilder){}

  registerOnChange(fn: any): void {
    this.formControl.valueChanges.pipe(takeUntil(this.destroySubject)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.formControl.valueChanges.pipe(takeUntil(this.destroySubject)).subscribe(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(model: ReusableFormModel): void {
    this.formControl.patchValue(model, { emitEvent: false});
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.formControl.valid ? null : { address: true };
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
