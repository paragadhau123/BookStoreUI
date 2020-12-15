import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  isAuthenticate = false;
  
  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    }
    else {
      return false
    }
  }
}
