import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  token: string | null;
  link: any;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    this.link = window.location.href.split('/').slice(0, 3).join('/');
  }
  onlinePayment(
    productId: string | null,
    shippingAddress: any
  ): Observable<any> {
    return this.http.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${productId}?url=${this.link}`,
      { shippingAddress: shippingAddress },
      {
        headers: {
          token: `${this.token}`,
        },
      }
    );
  }

  getOrders(productId: string | null): Observable<any> {
    return this.http.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${productId}`
    );
  }
  getCategory(): Observable<any> {
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }
  getsubCategory(id:string|null):Observable<any>{
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
  }
}
