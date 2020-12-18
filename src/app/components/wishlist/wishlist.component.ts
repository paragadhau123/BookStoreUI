import { Component, OnInit } from '@angular/core';
import { UserserviceService } from "../../services/userservice/userservice.service";
import { DataserviceService } from "../../services/dataservice/dataservice.service";
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private user: UserserviceService,private data :DataserviceService) { }
  
  wishlist: any;
  size: number;
  id: any;
  bookSearch: any;
  page: number = 1;
  budgetTotal;
  value: any = [];
  wishList: any;

  ngOnInit(): void {
    this.data.currentMessage.subscribe(data => { this.getAllWishlist()});
    this.getAllWishlist();
  }

  getAllWishlist() {
    this.user.getWishlistData().subscribe((data) => {
      this.wishList = true;
      console.log(data);
      this.wishlist = data["data"];
      this.size = this.wishlist.length;
    });
  }
  addToCart(data) {
    this.user.moveToCart(data).subscribe((data) => {
      this.getAllWishlist();
    });
  }
}
