import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  count:any
  constructor(private cartService: CartService) {
  }
  ngOnInit(): void{
    this.getCart();
  }

  getCart(){
    this.cartService.getCart().subscribe(
      {
        next:(res)=>{

          this.count = res
          console.log(this.count);
          localStorage.setItem('cartOwner', this.count.data.cartOwner);


        }
      }
    )
  }

  updateCart(count:number,id:string){
    this.cartService.updateCart(count,id).subscribe({
      next:((res)=>{
        this.count=res
        // this.count.numOfCartItems.next(res.numOfCartItems);



      })
    })
  }
  deleteCart(id:string){
    this.cartService.deleteCart(id).subscribe({
      next: (res) => {
        this.count = res;
      },
    });
  }
  removeCartItem(){
    this.cartService.removeCartItem().subscribe({
      next: (res) => {
        this.count = res;
      },
    });
  }
}
