import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserserviceService } from "../../services/userservice/userservice.service";
import { DataserviceService } from "../../services/dataservice/dataservice.service";
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.scss']
})

export class DisplaybooksComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() values = [];
  @Input() count;
  @Input() displayBook;
  @Input() wishList;
  @Input() bookArrayLength;
  @Input() bookArray: any;
  @Input() reviews: boolean;
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  page = 1;
  pageSize = 3;
  currentPage = 2;
  pageSizes = 4;
  showDiscription: any = [];
  public show: boolean = false;
  bookSearch: any;
  cartCondition: any = [];
  reviewBookArray: any = [];
  constructor(private user: UserserviceService, private data: DataserviceService, public route: Router) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(data => { this.getSearchBookData()});
  }

  handlePageChange(event): void {
    this.page = event;
  }

  getSearchBookData() {
    this.user.getSearchBookData().subscribe((message) => {
      console.log("search data- ", message.books);
      this.bookSearch = message.books;
    })
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }

  toggle() {
    this.show = !this.show;
  }
  
  addToCart(data) {
    this.user.addCart(data).subscribe((data) => {
      this.data.changeCartLength({ data1: data });
      this.data.changeCartLength({})
      this.data.changeMessage({});
    });
  }

  removeWishlist(bookId){
    this.user.deleteWishList(bookId).subscribe((data) => {
      this.data.changeMessage({});
    });
  }

  addToWishList(data) {
    this.user.addWishList(data).subscribe((data) => {

    });
  }

 
  navigateReviews(data) {
    this.route.navigate(['dashboard/reviews/'+ data]);
}
}
