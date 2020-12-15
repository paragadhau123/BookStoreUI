import { Component, OnInit ,Input} from '@angular/core';
import {UserserviceService  } from "../../services/userservice/userservice.service";
@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.scss']
})
export class DisplaybooksComponent implements OnInit {
  @Input() values=[];
  @Input() count;
  @Input() displayBook: any;
  public show:boolean = false;
  constructor(private user:UserserviceService) { }

  ngOnInit(): void {
  }
 
  toggle() {
    this.show = !this.show;
  }
  addToCart(data){
    this.user.addCart(data).subscribe((data)=>{
      
    });
  }

  addToWishList(data){
    this.user.addWishList(data).subscribe((data)=>{
      
    });
  }
}
