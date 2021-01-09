import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from "@angular/router";
import { UserserviceService } from "../../services/userservice/userservice.service";
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  displayBook: any;
  reviews = true;
  bookArray: [];
  reviewArray: [];
  form: FormGroup;
  constructor(private fb: FormBuilder,private route: ActivatedRoute,private books:UserserviceService) { 
    this.form = this.fb.group({
      review:[""]
       })
  }
  id: any;
  name: any;
  author: any;
  image: any;
  obj: any;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    this.displayBooksById(this.id);
    this.getBookReview(this.id)
  }
  displayBooksById(id) {
    this.books.getBooksById(id).subscribe(async result => {
      this.bookArray = result['data']
      this.reviews = true;
    },
      (error) => {
        console.log(error)
      })
  }
  getBookReview(id) {
    this.books.getBookReview(id).subscribe(async result => {
      this.reviewArray = result['data']
      console.log("result is ", result)
      console.log("reviewArray is ", this.reviewArray)
    },
      (error) => {
        console.log(error)
      })
  }
  addBookReview(){
    let reviewData={
     "Review":this.form.controls.review.value
    }
    console.log(reviewData)
    this.books.addBookReview(this.id,reviewData).subscribe((result: any) => {
     this.getBookReview(this.id)
    },
      (error) => {
      })
  }
}
