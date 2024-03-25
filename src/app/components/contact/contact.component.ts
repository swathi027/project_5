import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  registerForm: any;
  formdata:any;

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,]),
      FirstName:new FormControl('',Validators.required),
      LastName: new FormControl('',Validators.required),
      number: new FormControl('',Validators.required),
      confirmpassword: new FormControl('',Validators.required),
    });
  }
  onSubmit() {
   this.formdata=this.registerForm.value;
   console.log(this.formdata);
    }
    onotpChange(E: any) {
      console.log(E)
    }

}
