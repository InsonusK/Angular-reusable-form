import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ReusableFormModel } from "../reusable-form/reusable-form.model";

export class ReactiveFormControl extends FormGroup<{
    subForm: FormControl<ReusableFormModel>,
    someField: FormControl<string>
}>{
    constructor(fb:FormBuilder){
        super({
            subForm: fb.nonNullable.control({} as ReusableFormModel),
            someField: fb.nonNullable.control("")
        })
    }
}