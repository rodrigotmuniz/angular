import { FormArray, FormGroup } from "@angular/forms";

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

    static cepValidator(formGroup: FormGroup) {
        const errorObj = { cepInvalido: true };
        const cep = formGroup.value;
        if (!cep || cep == '') { return errorObj; }
        const regExCepValido = /^[0-9]{5}-?[0-9]{3}$/;
        return regExCepValido.test(cep) ? null : errorObj;
    }

    static equalsTo(otherField: string) {
        const validator = (formGroup: FormGroup) => {
            const error = { notEqualsTo: true };
            const otherFieldControl = (<FormGroup>formGroup.root).get(otherField);
            if (otherFieldControl) {
                const otherFieldValue = (<FormGroup>formGroup.root).get(otherField).value;
                const thisFieldValue = formGroup.value;
                return otherFieldValue === thisFieldValue ? null : error;
            }
            return error;

        };
        return validator;
    }

}