import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
  url = ' http://localhost:3000/'

  constructor( private http : HttpClient) { }

  postApiCall(endpoint:string , formData:any){
    let url =this.url + endpoint;
    return this.http.post(url , formData);

  }
}
