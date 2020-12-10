import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from "../httpservice/httpservice.service";

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpserviceService) {

  }
  getBooks() {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.get(`${this.baseUrl}Book`, true, options)
  }

  addNotes(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.post(`${this.baseUrl}Book/AddBook`, data, true, options);
  }

  deleteBook(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.delete(`${this.baseUrl}Book/${data}`, true, options)
  }

  updateNotes(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    return this.http.put(`${this.baseUrl}Book/${data.BookId}`, data, true, options)
  }
}
