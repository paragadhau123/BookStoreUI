import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpHeaders } from '@angular/common/http';
import {HttpserviceService  } from "../httpservice/httpservice.service";
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseUrl = environment.baseUrl;
  constructor(private http:HttpserviceService ){
    
  } 
  userLogin(data) {
    return this.http.post(`${this.baseUrl}User/Login`, data);
  }
  adminLogin(data) {
    return this.http.post(`${this.baseUrl}Admin/Login`, data);
  }
}
