import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserserviceService } from "../../services/userservice/userservice.service";
import { DataserviceService } from "../../services/dataservice/dataservice.service";
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

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
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  page = 1;
  count1 = 0;
  pageSize = 3;
  currentPage = 2;
  pageSizes = 10;
  cartCondition: any = [];
  public show: boolean = false;
 
  constructor(private user: UserserviceService, private data: DataserviceService, public route: Router) { }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;
  }
  addToCart(data) {
    this.user.addCart(data).subscribe((data) => {

    });
  }
  cartConditionMethod(index) {
    this.cartCondition[index] = true;
  }
  
  addToWishList(data) {
    this.user.addWishList(data).subscribe((data) => {

    });
  }
}
