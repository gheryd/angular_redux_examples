import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

export class CityValidators {

    static asyncCheckCity(control: AbstractControl): Observable<ValidationErrors|null> {
        const value = control.value as string;
        const validCities = ['Milan', 'Rome', 'Venice'];
        const validationErrors = validCities.includes(value) ?
            null : {invalidCity: true, validCities: validCities};
        return of(validationErrors).pipe(delay(2000));
    }

}
