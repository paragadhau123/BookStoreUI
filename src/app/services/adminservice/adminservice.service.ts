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
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('Token') }) }
    return this.http.get(`${this.baseUrl}Book`, true, options)
  }
}
