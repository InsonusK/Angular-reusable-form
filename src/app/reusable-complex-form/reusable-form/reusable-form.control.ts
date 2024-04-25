import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class ReusableFormControl extends FormGroup<{
    city: FormControl<string>;
    street: FormControl<string | null>;
    house: FormControl<number | null>;
  }>{
    constructor(fb:FormBuilder){
        super({
            city: fb.nonNullable.control(""),
            street: fb.control(null),
            house:fb.control(null)
        })
    }
}