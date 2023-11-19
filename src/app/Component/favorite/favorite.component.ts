import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  fav:any
  constructor(private cart: CartService) {
    this.getWishList()
  }
  getWishList(){
    this.cart.getWishList().subscribe({
      next:(res=>{
        console.log(res.data);
        this.cart.numOfFavItems.next(res.data.length)
        this.fav=res.data
      })
    })
  }
}
