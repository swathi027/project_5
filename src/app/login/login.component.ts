import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NumberValueAccessor, MaxValidator, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any;
  formdata: any;

  ngOnInit() {
    this.loginForm = new FormGroup({
      number: new FormControl('',[Validators.required,Validators.maxLength(10), Validators.minLength(6)]),
      // FullName: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6),]),

    });
  }
  onSubmit() {
    this.formdata = this.loginForm.value;
    console.log(this.formdata);
  }
  onotpChange(E: any) {
    console.log(E)
  }
}

