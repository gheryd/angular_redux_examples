import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ZipcodeValidators {

    static wrongFormat(control: AbstractControl): ValidationErrors | null {
        const value = control.value as string;

        if ( !/^[0-9]{5}$/.test(value) ) {
            return {wrongFormat: true};
        }
        return null;

    }

}
