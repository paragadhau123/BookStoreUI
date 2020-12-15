import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from "../httpservice/httpservice.service";
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseUrl = environment.baseUrl;
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
}
