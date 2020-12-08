import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminserviceService } from "../../services/adminservice/adminservice.service";
import { MatPaginator  } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddBooksComponent } from "../add-books/add-books.component";
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

  constructor(private admin: AdminserviceService,public dialog:MatDialog) { }
  MyDataSource: any;  
  Admin = "Admin";
   
  ngOnInit(): void {
    this.getAllBooks();
  }
 
  openAddDialog(){
    let dialogRef = this.dialog.open(AddBooksComponent,{});
  }

  deleteBook(element){
    this.admin.deleteBook(element.bookId).subscribe((data)=>{
      this.getAllBooks();
    });
  }
  
  getAllBooks() {
    this.admin.getBooks().subscribe((data) => {
       this.MyDataSource = new MatTableDataSource(data['data']);  
      console.log(data['data']);
    });
  }

  applyFilter(event: Event) {
    console.log("filterData")
    const filterValue = (event.target as HTMLInputElement).value;
    this.MyDataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue)
  }
}
