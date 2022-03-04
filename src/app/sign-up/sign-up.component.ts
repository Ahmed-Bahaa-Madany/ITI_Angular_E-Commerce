import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm : FormGroup;
  constructor(private fb : FormBuilder) {

    this.signUpForm = this.fb.group({
      inputName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],

      inputUsername: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],

      inputSginUpEmail: ['',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],

      inputPass: ['',[Validators.required,Validators.minLength(8),Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")]],

      inputConfiemPass: ['',[Validators.required]],

      },
      {
        validator: this.ConfirmedValidator('inputPass', 'inputConfiemPass')
      }
      )


    // this.signUpForm = new FormGroup({})
  }

  ngOnInit(): void {
  }

  get formControls(){
    return this.signUpForm.controls;
  }


  submitSignUpForm(){
    console.log(this.signUpForm)
  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
}
