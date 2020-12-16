import { Component, OnInit ,Input,ViewChild} from '@angular/core';
import { UtilityService } from "../../services/utilityservice/utility.service";
import { Router } from '@angular/router';
import { DataserviceService } from "../../services/dataservice/dataservice.service";
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  constructor(private utility:UtilityService, public route: Router,private data:DataserviceService) { }
  @Input() childMessage: string;
  length:any;
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
    this.data.currentMessage.subscribe(message => {
      console.log("receved message  "+message);
      this.length = message;
    })
      
  }
  
  logout() {
    this.utility.displayMessage("Logout successfully")
    localStorage.removeItem('token')
    localStorage.removeItem('firstname')
    localStorage.removeItem('email')
    this.route.navigate(['login'])
  }
 
}
