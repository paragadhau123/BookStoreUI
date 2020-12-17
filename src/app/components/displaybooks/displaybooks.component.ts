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
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  page = 1;
  pageSize = 3;
  currentPage = 2;
  pageSizes = 3;
  showDiscription: any = [];
  public show: boolean = false;
  bookSearch: any;

  constructor(private user: UserserviceService, private data: DataserviceService, public route: Router) { }

  ngOnInit(): void {
  }

  handlePageChange(event): void {
    this.page = event;
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

    });
  }

  addToWishList(data) {
    this.user.addWishList(data).subscribe((data) => {

    });
  }
}
