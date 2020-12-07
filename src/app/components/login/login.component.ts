import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserserviceService } from "../../services/userservice/userservice.service";
import { Router } from '@angular/router';
import { UtilityService } from "../../services/utilityservice/utility.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private user: UserserviceService, public route: Router, private utility: UtilityService) { }
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

  getPasswordErrorMessage() {

    if (this.password.hasError('required')) {
      return 'Please enter a password';
    }
    return this.password.invalid ? 'Password length must be greater than 6' : '';
  }

  login() {
    if (this.password.valid && this.email.valid) {
      this.Login();
    }
    else {
      this.email.markAsTouched();
      this.password.markAsTouched();
    }
  }

  Login() {
    let data = {
      "UserEmailId": this.email.value,
      "UserPassword": this.password.value
    }

    this.user.userLogin(data).subscribe(response => {
      console.log(response)
      this.utility.displayMessage("User Login Successful");
      localStorage.setItem('firstName', response['data']['firstName']);
      localStorage.setItem('lastName', response['data']['lastName']);
      localStorage.setItem('token', response['data']['token']);
      localStorage.setItem('id', response['data']['id']);
      localStorage.setItem('role', response['data']['role']);
      localStorage.setItem('email', response['data']['emailId']);
      if (localStorage.getItem('role') == "User") {
        this.route.navigateByUrl('/userDashboard')
      }
      else {
        this.route.navigateByUrl('/adminDashBoard')
      }
    })
  }
}

