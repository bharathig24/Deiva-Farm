import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user;
  constructor(private http: HttpClient) {  }

  registerReq(data){
    return this.http.post('http://localhost:3000/register',data);
  }

  loginReq(data){
    // console.log(data);
    
    return this.http.post('http://localhost:3000/login', data);
  }


}
