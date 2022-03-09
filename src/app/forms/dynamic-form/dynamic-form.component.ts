import { Component, EventEmitter, OnInit, Output, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Output() onBtnClicked = new EventEmitter<any>();

  dynamicFormGroup: FormGroup | undefined;
  formTemplate: any;
  fields: any[] = [];
  action: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let inputsGroup: any = {}

    this.formTemplate.fields.forEach((input: any) => {
      if (input.action.includes(this.action)) {
        this.fields.push(input);
        inputsGroup[input.name] = new FormControl('', input.validation);
        console.log(input.validation)
      }
    })
    this.dynamicFormGroup = new FormGroup(inputsGroup);
  }

  onFocusOutEvent(event: any) {
    console.log(VERSION.full);
    // var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    // form.classList.add('was-validated');
  }

  clearForm() {
    this.dynamicFormGroup ? this.dynamicFormGroup.reset() : null;
  }

  onSubmit() {
    console.log("onSubmit()")
    this.onBtnClicked.emit(this.dynamicFormGroup?.value);

    // var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    // if (form.checkValidity() === false) {
    //   // event.preventDefault();
    //   // event.stopPropagation();
    // }
    // form.classList.add('was-validated');
  }
}

