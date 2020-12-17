import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from "../httpservice/httpservice.service";
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseUrl = environment.baseUrl;
  private searchBookData = new Subject<any>();
  constructor(private http: HttpserviceService) {

  }
  userLogin(data) {
    return this.http.post(`${this.baseUrl}User/Login`, data);
  }

  adminLogin(data) {
    return this.http.post(`${this.baseUrl}Admin/Login`, data);
  }

  register(data) {
    return this.http.post(`${this.baseUrl}User/Register`, data);
  }

  forgotPassword(data) {
    return this.http.post(`${this.baseUrl}User/ForgetPassword`, data);
  }

  resetPassword(data, token) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }) }
    return this.http.post(`${this.baseUrl}User/ResetPassword`, data, true, options)
  }

  getBooks() {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.get(`${this.baseUrl}Book`, true, options)
  }

  getasc() {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.get(`${this.baseUrl}Book/SortByPriceLowToHigh`, true, options)
  }
  getdsc() {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.get(`${this.baseUrl}Book/SortByPriceHighToLow`, true, options)
  }
  getCartData() {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.get(`${this.baseUrl}Cart`, true, options)
  }

  addCart(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.post(`${this.baseUrl}Cart/${data.bookId}`, data, true, options);
  }

  addWishList(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.post(`${this.baseUrl}WishList/${data.bookId}`, data, true, options);
  }

  getWishlistData() {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.get(`${this.baseUrl}WishList`, true, options)
  }

  deleteWishList(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.delete(`${this.baseUrl}WishList/${data}`, true, options)
  }

  moveToCart(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.post(`${this.baseUrl}WishList/MoveToCart/${data}`, data, true, options);
  }

  increase(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.get(`${this.baseUrl}Cart/IncreaseQuantity/${data.bookId}`, true, options)
  }

  decrease(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.get(`${this.baseUrl}Cart/DecreaseQuantity/${data.bookId}`, true, options)
  }

  order(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.post(`${this.baseUrl}Order/OrderAll`, data, true, options);
  }

  deleteCart(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.delete(`${this.baseUrl}Cart/${data}`, true, options)
  }

  setSearchBookData(message: any) {
    console.log("set service", message);
    return this.searchBookData.next({ books: message });
  }
  getSearchBookData(): Observable<any> {
    console.log("get service");
    return this.searchBookData.asObservable();
  }
}
