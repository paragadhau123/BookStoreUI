import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  hide = true;
  errors;
  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  getEmailErrorMessage() {
    
    if (this.email.hasError('required')) {
      return 'Please enter a email id';
    }
    if (this.email.hasError('email')) {
    return 'Invalid email';
    }
  }

  getPasswordErrorMessage(){

    if (this.password.hasError('required')) {
      return 'Please enter a password';
    }
   return this.password.invalid ? 'Password length must be greater than 6' : '';
  }

  login() {
    if(this.password.valid && this.email.valid){
     this.onLogin();
     
    }
    else{
      this.email.markAsTouched();
      this.password.markAsTouched();
    }
  }

  onLogin(){
    let data={
      "emailId": this.email.value,
      "password":this.password.value
     }   
     if(['data']['emailId']=="admin@gmail.com"){

     }
     else{
       
     }
  }
}
