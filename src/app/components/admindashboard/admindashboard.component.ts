import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminserviceService } from "../../services/adminservice/adminservice.service";
import { MatDialog } from '@angular/material/dialog';
import { AddBooksComponent } from "../add-books/add-books.component";
import { UpdatebookComponent } from "../updatebook/updatebook.component";
import { MatPaginator, PageEvent } from '@angular/material/paginator';

export interface PeriodicElement {
  bookName: string;
  authorName: string;
  description: string;
  price: string;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})

export class AdmindashboardComponent implements OnInit {

  displayedColumns: string[] = ['image', 'bookName', 'authorName', 'description', 'price', 'quantity', 'update', 'delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private admin: AdminserviceService, public dialog: MatDialog) { }
  MyDataSource: any;
  Admin = "Admin";

  ngOnInit(): void {
    this.getAllBooks();
  }

  openAddDialog() {
    let dialogRef = this.dialog.open(AddBooksComponent, {});
  }

  openUpdateDialog(element) {
    let dialogRef = this.dialog.open(UpdatebookComponent, { data: element });
  }

  deleteBook(element) {
    this.admin.deleteBook(element.bookId).subscribe((data) => {
      this.getAllBooks();
    });
  }

  getAllBooks() {
    this.admin.getBooks().subscribe((data) => {
      this.MyDataSource = new MatTableDataSource(data['data']);
      console.log(data['data']);
    });
  }
  
  OnPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    console.log(endIndex)
    if (endIndex > this.MyDataSource.length) {
      endIndex = this.MyDataSource.length;
    }
  }

  applyFilter(event: Event) {
    console.log("filterData")
    const filterValue = (event.target as HTMLInputElement).value;
    this.MyDataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue)
  }
}
