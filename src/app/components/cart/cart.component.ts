import { Component, OnInit } from '@angular/core';
import { UserserviceService } from "../../services/userservice/userservice.service";
import { DataserviceService } from "../../services/dataservice/dataservice.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private user: UserserviceService, private data: DataserviceService, public route: Router) { }

  values = [];
  public show: boolean = false;
  reset = true;
  orderSummary = true;
  cartBookArray = [];
  length;
  
  ngOnInit(): void {
    this.getCartData();
    this.data.currentMessage.subscribe(data => { this.getCartData() })
  }

  toggle() {
    this.show = !this.show;
  }

  reserFalse() {
    this.reset = false;
  }

  orderSummaryFalse() {
    this.orderSummary = false;
  }

  getCartData() {
    this.user.getCartData().subscribe((data) => {
      console.log(data);
      this.cartBookArray = data["data"];
      this.length = this.cartBookArray.length;
     // this.data.changeMessage(this.length);
    });
  }

  increaseQuantity(data) {
    this.user.increase(data).subscribe((data) => {
      this.data.changeMessage({});
    });
  }

  decreaseQuantity(data) {
    this.user.decrease(data).subscribe((data) => {
      this.data.changeMessage({});
    });
  }

  placeOrder(data) {
    this.user.order(data).subscribe((data) => {
      this.route.navigate(['order'])
      this.data.changeMessage({});
    });
  }

  removeBookFromCart(book){
    this.user.deleteCart(book).subscribe((data) => {
      this.data.changeMessage({});
    });
  }
}
