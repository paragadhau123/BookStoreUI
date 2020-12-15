import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { RegisterComponent } from './components/register/register.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BooksComponent } from './components/books/books.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import {MatMenuModule} from '@angular/material/menu';
import { GetbooksComponent } from './components/getbooks/getbooks.component';
import { DisplaybooksComponent } from './components/displaybooks/displaybooks.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import {MatListModule} from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { OrdersuccessComponent } from './components/ordersuccess/ordersuccess.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    AdmindashboardComponent,
    RegisterComponent,
    BooksComponent,
    AddBooksComponent,
    UpdatebookComponent,
    GetbooksComponent,
    DisplaybooksComponent,
    FooterComponent,
    CartComponent,
    OrdersuccessComponent,
    WishlistComponent,
    UserdashboardComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
