import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserserviceService } from "../../services/userservice/userservice.service";
import { UtilityService } from "../../services/utilityservice/utility.service";
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ResetpasswordComponent implements OnInit {

  constructor(private userService:UserserviceService , private utility: UtilityService, private route: ActivatedRoute) { }
  hide = true;
  errors;
  ngOnInit(): void {
  }
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  getPasswordErrorMessage(){

    if (this.password.hasError('required')) {
      return 'Please enter a password';
    }
   return this.password.invalid ? 'Password length must be greater than 6' : '';
  }
  onSubmit() {
    let token = this.route.snapshot.params.token;
    console.log(token);
    let userData = {
      "NewPassword": this.password.value,
    }

    if (this.password.valid) {

      this.userService.resetPassword(userData, token).subscribe((result: any) => {
        this.utility.displayMessage("Password Changed Succesfully");
      },
        (error) => {
          this.utility.displayMessage("Password Changed Unsuccesful");
        })
    }
  }
}
