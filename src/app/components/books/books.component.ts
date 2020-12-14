import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminserviceService } from "../../services/adminservice/adminservice.service";
import { AddBooksComponent } from "../add-books/add-books.component";
import { UpdatebookComponent } from "../updatebook/updatebook.component";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataserviceService } from "../../services/dataservice/dataservice.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {
  @Input() childMessage: string;
  @Input() id: any;
  @Input() element: any;

  constructor(private data:DataserviceService, @Inject(MAT_DIALOG_DATA) public data1: any,private adminService: AdminserviceService, public dialog: MatDialogRef<AddBooksComponent>, public dialog1: MatDialogRef<UpdatebookComponent>) { }

  ngOnInit(): void {
    if (this.childMessage == 'Add') {
      this.element = [];
    }
  }

  bookName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  authorName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  description = new FormControl('', [Validators.required, Validators.minLength(3)]);
  price = new FormControl('', [Validators.required]);
  quantity = new FormControl('', [Validators.required,]);
 
  localUrl: any[];
  showPreviewImage(event: any) {
      if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
              this.localUrl = event.target.result;
          }
          reader.readAsDataURL(event.target.files[0]);
      }
  }
  
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

  getQuantityErrorMessage() {
    if (this.quantity.hasError('required')) {
      return 'Please enter a quantity';
    }
    return this.quantity.invalid ? 'Invalid quantity' : '';
  }

  clickFunction() {
    if (this.childMessage == 'Add') {
      this.addBook();
    }
    else {
      this.updateBook();
    }
  }

  addBook() {

    let data = {
      "BookName": this.bookName.value,
      "AuthorName": this.authorName.value,
      "Description": this.description.value,
      "Price":parseInt(this.price.value),
      "Image":this.localUrl,
      "Quantity":parseInt(this.quantity.value)
    }

    this.adminService.addNotes(data).subscribe((data) => {
      this.data.changeMessage({});
    });
    this.dialog.close();
  }
  updateBook() {
    let Data = {
      "BookName": (<HTMLInputElement>document.getElementById('name')).value,
      "AuthorName": (<HTMLInputElement>document.getElementById('author')).value,
      "Description": (<HTMLInputElement>document.getElementById('description')).value,
      "Price": (<HTMLInputElement>document.getElementById('price')).value,
      "Image":this.localUrl,
      "BookId": this.data1.bookId,
    }
    this.adminService.updateNotes(Data).subscribe((data) => {
      this.data.changeMessage({});
    });
    this.dialog1.close();
  }
}

