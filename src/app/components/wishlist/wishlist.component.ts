import { Component, OnInit } from '@angular/core';
import { UserserviceService } from "../../services/userservice/userservice.service";
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private user:UserserviceService) { }
  wishlist: any;
  size: number;
  id: any;
  bookSearch: any;
  page: number = 1;
  budgetTotal;
  value: any = [];
  wishList:any;
  ngOnInit(): void {
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

  removeWishlist(bookId){
    this.user.deleteWishList(bookId).subscribe((data) => {
      this.getAllWishlist();
    });
  }
  
  addToCart(data) {
    this.user.moveToCart(data).subscribe((data) => {
      this.getAllWishlist();
    });
}
}
