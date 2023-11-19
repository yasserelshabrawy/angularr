import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) {

   }
   register(value:any){
   return this.httpclient.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      value);
   }
   login(value:any){
   return this.httpclient.post(
     `https://ecommerce.routemisr.com/api/v1/auth/signin`,
     value
   );
   }
   logedIn(){
    return localStorage.getItem('token')
   }
}
