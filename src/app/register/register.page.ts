import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';``
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signupForm: FormGroup;
  passwordType1: string = 'password';
  passwordIcon1: string = 'eye-off';

  passwordType2: string = 'password';
  passwordIcon2: string = 'eye-off';

  phone_country_code_label : any = '';
  password:any = '';
  strengthVal:any = 0;
  countries : any = [];
  constructor() {

    this.signupForm = new FormGroup({ 
      'full_name'        : new FormControl('', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]*$')])),
      'password'          : new FormControl('', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]*$')])),
      'confirm_password'  : new FormControl('', Validators.compose([Validators.required])),
      'phone_country_code': new FormControl('', Validators.compose([Validators.required])),
      'phone'             : new FormControl('', Validators.compose([Validators.required,Validators.minLength(10)])),
      'email'             : new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
     
  });
  }

  ngOnInit() {

  }

  doSignup() {

  }

  show_hide_password() {
    this.passwordType1 = this.passwordType1 === 'text' ? 'password' : 'text';
    this.passwordIcon1 = this.passwordIcon1 === 'eye-off' ? 'eye' : 'eye-off';
  }

  hideShowPassword2() {
    console.log("hideShowPassword2");
    this.passwordType2 = this.passwordType2 === 'text' ? 'password' : 'text';
    this.passwordIcon2 = this.passwordIcon2 === 'eye-off' ? 'eye' : 'eye-off';
  }
}
