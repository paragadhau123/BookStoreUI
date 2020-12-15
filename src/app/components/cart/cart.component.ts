import { Component, OnInit } from '@angular/core';
import { UserserviceService } from "../../services/userservice/userservice.service";
import { DataserviceService } from "../../services/dataservice/dataservice.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private user:UserserviceService,private data:DataserviceService) { }
  values=[];

  cartBookArray = [];
  length;
  ngOnInit(): void {
    this.getCartData();
    this.data.currentMessage.subscribe(data=>{this.getCartData()})
  }
  getCartData(){
    this.user.getCartData().subscribe((data)=>{
      console.log(data);
      this.cartBookArray =data["data"];
      this.length = this.cartBookArray.length ;
    });
  }
}
