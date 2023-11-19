import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { GetProductService } from 'src/app/Services/get-product.service';
import { AuthService } from '../../Services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  prdList: any = [];
  toast: any;
  wishList:any=[]

  constructor(
    private getPrd: GetProductService,
    private cart: CartService,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getPrd.getProduct().subscribe({
      next: (res) => {
        this.prdList = res;
      },
    });
  }
  productDetails(id: string) {
    this.getPrd.getProductsDetails(id).subscribe((details) => {
      console.log(details);
    });
  }
  addToCart(id: string) {
    this.cart.addToCart(id).subscribe((add) => {
      this.cart.numOfCartItems.next(add.numOfCartItems);
      this.toast = add;
      console.log(this.toast.message);
      this.snackBar.open(this.toast.message, 'undo', {
        duration: 1000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: 'my-custom-snackbar',
      });
    });
  }
  addToWishList(prdId: string | null) {
    this.cart.addToWishList(prdId).subscribe({
      next: (res) => {
        console.log(res);
        this.wishList=res.data
        if (res.status == 'success') {
          this.cart.numOfFavItems.next(res.data.length);
          this.snackBar.open(res.message, 'Undo');
        }
      },
    });
  }
  removeFromWishList(prdId: string | null) {
    this.cart.removeFromWishList(prdId).subscribe({
      next:(res)=>{
        this.wishList=res.data
        console.log(this.wishList);

      if (res.status == 'success') {
    this.cart.numOfFavItems.next(res.data.length);
    this.snackBar.open(res.message, 'Undo');
      }

      }
    })
  }


}
