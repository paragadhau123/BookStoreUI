import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminserviceService } from "../../services/adminservice/adminservice.service";
import { AddBooksComponent } from "../add-books/add-books.component";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})



export class BooksComponent implements OnInit {
  @Input() childMessage: string;
  @Input() id: any;
  @Input() element: any;

  constructor(private adminService: AdminserviceService, public dialog: MatDialogRef<AddBooksComponent>) { }

  ngOnInit(): void {
    if (this.childMessage == 'Add') {
      this.element = [];
    }
  }
  data1 = [];

  bookName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  authorName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  description = new FormControl('', [Validators.required, Validators.minLength(3)]);
//  image = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  quantity = new FormControl('', [Validators.required]);

  //url = "D:\\parag\\Angular\\BookStore-UI\\src\\assets\\images.jfif";

  getBookNameErrorMessage() {
    if (this.bookName.hasError('required')) {
      return 'Please enter a book name';
    }
    return this.bookName.invalid ? 'Invalid book name' : '';
  }

  getAuthorNameErrorMessage() {
    if (this.authorName.hasError('required')) {
      return 'Please enter a author name';
    }
    return this.authorName.invalid ? 'Invalid author name' : '';
  }

  getDescriptionErrorMessage() {
    if (this.description.hasError('required')) {
      return 'Please enter a description';
    }
    return this.description.invalid ? 'Invalid description' : '';
  }

  getpriceErrorMessage() {
    if (this.price.hasError('required')) {
      return 'Please enter a price';
    }
    return this.price.invalid ? 'Invalid price' : '';
  }

  // getimageErrorMessage() {
  //   if (this.price.hasError('required')) {
  //     return 'Please enter a image path';
  //   }
  //   return this.price.invalid ? 'Invalid image' : '';
  // }

  getQuantityErrorMessage() {
    if (this.quantity.hasError('required')) {
      return 'Please enter a quantity';
    }
    return this.quantity.invalid ? 'Invalid quantity' : '';
  }
  clickFunction() {
    this.addBook();
  }

  addBook() {
    let data = {
      "BookName": this.bookName.value,
      "AuthorName": this.authorName.value,
      "Description": this.description.value,
      "Price": this.price.value,
      "Quantity": this.quantity,
     // "Image": this.image.value
    }
    this.adminService.addNotes(data).subscribe((data) => {
    });
    this.dialog.close();
  }
}