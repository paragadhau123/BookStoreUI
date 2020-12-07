import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminserviceService } from "../../services/adminservice/adminservice.service";
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

  constructor(private admin: AdminserviceService) { }

  Admin = "Admin";
  values = [];
  pageSlice = [];
  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.admin.getBooks().subscribe((data) => {
      this.values = data["data"];
      this.pageSlice = this.values.slice(0, 5);
      console.log( this.pageSlice);
      console.log(this.values);

    });
  }
  dataSource = new MatTableDataSource(this.pageSlice);  
}
