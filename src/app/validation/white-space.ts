import { AbstractControl, ValidationErrors } from "@angular/forms";

export class WhiteSpace {
    static noSpaceAllowed(control: AbstractControl): ValidationErrors | null {
        const data = control.value;
        if(data != undefined){
            if (data.split('').every((d: any) => d == ' ')) {
                return{ noSpaceAllowed: true }
            }
        }
        return null
    }
}

