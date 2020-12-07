import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserserviceService } from "../../services/userservice/userservice.service";
import { UtilityService } from "../../services/utilityservice/utility.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  hide = true;
  errors;

  constructor(private user:UserserviceService, private utility: UtilityService) { }
  firstName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  gender = new FormControl('', [Validators.required, Validators.minLength(3)]);
  city = new FormControl('', [Validators.required, Validators.minLength(3)]);
  state = new FormControl('', [Validators.required, Validators.minLength(3)]);
  pincode = new FormControl('', [Validators.required, Validators.minLength(6)]);
  phone = new FormControl('', [Validators.required, Validators.minLength(10)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  ngOnInit(): void {
  }

  getFirstNameErrorMessage(){
    if (this.firstName.hasError('required')) {
      return 'Please enter a first name';
    }
   return this.firstName.invalid ? 'Invalid first name' : '';
  }

  getLastNameErrorMessage(){
    if (this.lastName.hasError('required')) {
      return 'Please enter a last name';
    }
   return this.lastName.invalid ? 'Invalid last name' : '';
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter a email id';
    }
    if (this.email.hasError('email')) {
    return 'Invalid email';
    }
  }
  getGenderErrorMessage(){
    if (this.gender.hasError('required')) {
      return 'Please enter gender';
    }
   return this.gender.invalid ? 'Invalid gender' : '';
  }
  getCityErrorMessage(){
    if (this.city.hasError('required')) {
      return 'Please enter city';
    }
   return this.city.invalid ? 'Invalid city' : '';
  }

  getStateErrorMessage(){
    if (this.state.hasError('required')) {
      return 'Please enter a state';
    }
   return this.state.invalid ? 'Invalid state' : '';
  }

  getPincodeErrorMessage(){
    if (this.pincode.hasError('required')) {
      return 'Please enter a pincode';
    }
   return this.pincode.invalid ? 'Invalid pincode' : '';
  }

  getPhoneErrorMessage(){
    if (this.phone.hasError('required')) {
      return 'Please enter a phone number';
    }
   return this.phone.invalid ? 'Invalid phone number' : '';
  }

  getPasswordErrorMessage(){

    if (this.password.hasError('required')) {
      return 'Please enter a password';
    }
   return this.password.invalid ? 'Invalid password' : '';
  }
  register() {
    if(this.firstName.valid&&this.lastName.valid && this.email.valid && this.city.valid && this.gender.valid && this.state.valid && this.pincode.valid && this.phone.valid &&this.password.valid){
     this.onRegister();
    }
    else{
      this.firstName.markAsTouched();
      this.lastName.markAsTouched();
      this.email.markAsTouched();
      this.gender.markAsTouched();
      this.city.markAsTouched();
      this.state.markAsTouched();
      this.phone.markAsTouched();
      this.pincode.markAsTouched();
      this.password.markAsTouched();
    }
  }
  
onRegister(){
  let data={
    "FirstName": this.firstName.value,
    "LastName": this.lastName.value, 
    "Gender": this.gender.value,
    "EmailId": this.email.value,
    "PhoneNumber":this.phone.value,
    "Password":this.password.value,
    "City":this.city.value,
    "State":this.state.value,
    "PinCode":this.pincode.value
   }
this.user.register(data).subscribe(response => {
  this.utility.displayMessage("Register Succesfully");       
}  
)}
}
