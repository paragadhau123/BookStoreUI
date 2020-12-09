import { Component, OnInit ,Input,ViewChild} from '@angular/core';
import { UtilityService } from "../../services/utilityservice/utility.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(private utility:UtilityService, public route: Router) { }
  @Input() childMessage: string;
  
  dispalyimg=null
  dispalySearchBar=null
  token = localStorage.getItem('token')
  name = localStorage.getItem('firstName')
  email = localStorage.getItem('email')
  ngOnInit(): void {
    if (this.childMessage == "Admin"){
      this.dispalyimg=false;
     this.dispalySearchBar=false;
    
    }
    else{
      this.dispalyimg=true;
      this.dispalySearchBar=true;
    }
  }
  logout() {
    this.utility.displayMessage("Logout successfully")
    localStorage.removeItem('token')
    localStorage.removeItem('firstname')
    localStorage.removeItem('email')
    this.route.navigate(['login'])
  }
 
}
