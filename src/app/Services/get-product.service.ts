import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../Model/iproduct';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  constructor(private httpClient: HttpClient) {

  }
  getProduct():Observable<Iproduct[]>{
   return this.httpClient.get<Iproduct[]>(`https://ecommerce.routemisr.com/api/v1/products`
   );
  }
    getProductsDetails(id:string|null){
        return this.httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    }
}
