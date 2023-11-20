import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { GetProductService } from 'src/app/Services/get-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  prdLis: any;
  toast: any;
  

  constructor(
    private prdService: GetProductService,
    private avtivateRoute: ActivatedRoute,
    private cart: CartService,
    private snackBar: MatSnackBar,
    ) {

  }

  ngOnInit(): void {
     let productId = this.avtivateRoute.snapshot.paramMap.get('productId');
    console.log(productId);

    this.productsDetails(productId);

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
  productsDetails(productId: any) {
    this.prdService.getProductsDetails(productId).subscribe((details) => {
      this.prdLis = details;


      console.log(this.prdLis);
    });
  }
}
