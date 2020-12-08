import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminserviceService } from "../../services/adminservice/adminservice.service";
import { MatPaginator  } from '@angular/material/paginator';
  
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
  constructor(private admin: AdminserviceService) { }
  MyDataSource: any;  
  Admin = "Admin";
  values = [];
  pageSlice = [];
  
  ngOnInit(): void {
    this.getAllBooks();
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
