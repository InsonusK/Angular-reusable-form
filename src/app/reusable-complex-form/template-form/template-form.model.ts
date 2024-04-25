import { ReusableFormModel } from "../reusable-form/reusable-form.model";

export class TemplateFormModel{
    constructor(public subForm: ReusableFormModel, public someField:string){

    }
}