import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserserviceService } from "../../services/userservice/userservice.service";
import { UtilityService } from "../../services/utilityservice/utility.service";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private userService:UserserviceService , private utility: UtilityService) { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  getEmailErrorMessage() {

    if (this.email.hasError('required')) {
      return 'Please enter a email id';
    }
    if (this.email.hasError('email')) {
      return 'Invalid email';
    }
  }
  submit(){
    if( this.email.valid){
      let data = {
        "EmailId": this.email.value,
      }
      this.userService.forgotPassword(data).subscribe(response => {
        console.log(response)
        this.utility.displayMessage("Reset Password Link IS Sent On Gmail Account");
      })
    }
  }
}
