import { FormArray, FormControl } from "@angular/forms";

export class FormValidations {
    static requiredMinCheckBox(min = 1) {
        const validator = (formArray: FormArray) => {
            const totalChecked = formArray.controls
            .map(v => v.value)
            .reduce((prev, curr) => curr ? prev + 1 : prev, 0);
            return totalChecked >= min ? null : { required: true };
        };
        return validator;
    }

    static cepValidator(formControl: FormControl) {
        const cep = formControl.value;
        const error = { cepInvalido: true };
        if (cep && cep !== '') {
            const cepPattern =  /^[0-9]{5}-?[0-9]{3}$/;
            let cepValido = cepPattern.test(cep);
            console.log('CEP VALIDO: ' + cepValido)
            return cepValido ? null : error;
        }
        return error;
    }
}