import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private httpclient: HttpClient) { }

  post(url, data, isHeaderRequired = false, headers = null) {
    return this.httpclient.post(url, data, isHeaderRequired && headers)
  }

  get(url, isHeaderRequired = false, header = null) {
    return this.httpclient.get(url, isHeaderRequired && header)
  }

  put(url, data, isHeaderRequired = false, headers = null) {
    return this.httpclient.put(url, data, isHeaderRequired && headers)
  }

  delete(url, isHeaderRequired = false, headers = null) {
    return this.httpclient.delete(url, isHeaderRequired && headers)
  }

}
