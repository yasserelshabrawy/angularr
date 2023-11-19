import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  storage: any;
  numOfCartItems:number = 0
  numOfFavItems:number = 0
  constructor(
    private router: Router,
    public auth: AuthService,
    private cart: CartService
  ) {
    this.cart.numOfCartItems.subscribe((res) => {
      this.numOfCartItems = res
    });
    this.cart.numOfFavItems.subscribe((res)=>{
      this.numOfFavItems = res

    })
  }
  logOut() {
    this.storage = localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
