import { Component } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss'],
})
export class AllordersComponent {
  cartOwner:any
  prds:any
  constructor(private order: OrderService) {
    this.cartOwner = localStorage.getItem('cartOwner')
    this.getOrders()


  }
  getOrders(){
    this.order.getOrders(this.cartOwner).subscribe({
      next:(res=>{
        console.log(res);
        this.prds = res
        console.log(this.prds[0].cartItems[0].product.imageCover);



      })
    })
  }
}
