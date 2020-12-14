import { Component, OnInit } from '@angular/core';
import { UserserviceService } from "../../services/userservice/userservice.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private user:UserserviceService) { }
  values=[];

  ngOnInit(): void {
    this.getCartData();
  }
  getCartData(){
    this.user.getCartData().subscribe((data)=>{
      console.log(data);
      this.values=data["data"];
      console.log(this.values)
    });
  }
}
