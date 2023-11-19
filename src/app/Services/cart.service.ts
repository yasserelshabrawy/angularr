import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  token: string | null;
  numOfCartItems: BehaviorSubject<number> = new BehaviorSubject(0);
  numOfFavItems: BehaviorSubject<number> = new BehaviorSubject(0);
  cartId: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    this.getCart().subscribe({
      next: (res) => {
        this.numOfCartItems.next(res.numOfCartItems);
        this.cartId.next(res.data.id);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getWishList().subscribe({
      next:(res)=>{
         this.numOfFavItems.next(res.data.length);
      }
    })
  }
  addToCart(productId: string): Observable<any> {
    return this.http.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: productId },
      {
        headers: {
          token: `${this.token}`,
        },
      }
    );
  }
  getCart(): Observable<any> {
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: {
        token: `${this.token}`,
      },
    });
  }
  updateCart(count: number, id: string): Observable<any> {
    return this.http.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      { count: count },
      {
        headers: {
          token: `${this.token}`,
        },
      }
    );
  }
  deleteCart(id: string) {
    return this.http.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,

      {
        headers: {
          token: `${this.token}`,
        },
      }
    );
  }
  removeCartItem() {
    return this.http.delete(
      `https://ecommerce.routemisr.com/api/v1/cart`,

      {
        headers: {
          token: `${this.token}`,
        },
      }
    );
  }
  getWishList(): Observable<any> {
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      headers: {
        token: `${this.token}`,
      },
    });
  }
  addToWishList(prdId: string | null): Observable<any> {
    return this.http.post(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      { productId: prdId },
      {
        headers: {
          token: `${this.token}`,
        },
      }
    );
  }
  removeFromWishList(prdId: string | null): Observable<any> {
    return this.http.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${prdId}`,
      {
        headers: {
          token: `${this.token}`,
        },
      }
    );
  }
}

