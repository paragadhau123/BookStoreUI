import { Component, OnInit } from '@angular/core';
import { UserserviceService } from "../../services/userservice/userservice.service";

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {

  constructor(private userService:UserserviceService) { }
  values=[];
  message=""
  count=0
  displayBook: any;
  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks(){
    console.log("Hello");

    this.userService.getBooks().subscribe((data)=>{
      this.displayBook = true;
      this.values=data["data"];
      this.count=this.values.length
      console.log(this.values)
    });
  }
  getlowtohigh(){
    console.log("asc");
    this.userService.getasc().subscribe((data)=>{
      this.displayBook = true;
      this.values=[];
      this.values=data["data"];
      this.count=this.values.length
      console.log(this.values)
    });
  }
  gethightolow(){
    console.log("asc");
    this.userService.getdsc().subscribe((data)=>{
      this.displayBook = true;
      this.values=[];
      this.values=data["data"];
      this.count=this.values.length
      console.log(this.values)
    });
  }

}
