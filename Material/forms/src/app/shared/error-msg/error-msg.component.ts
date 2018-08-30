import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {
    for (const errorPropertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(errorPropertyName) && this.control.touched) {
        return FormValidations.getErrorMessage(errorPropertyName, this.label, this.control.errors[errorPropertyName]);
      }
    }
    return null;
  }

}
