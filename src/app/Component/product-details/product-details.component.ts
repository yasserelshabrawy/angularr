import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductService } from 'src/app/Services/get-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  prdLis: any;
  constructor(
    private prdService: GetProductService,
    private avtivateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let productId = this.avtivateRoute.snapshot.paramMap.get('productId');
    console.log(productId);
    this.productsDetails(productId)
  }
  productsDetails(productId:any) {
    this.prdService.getProductsDetails(productId).subscribe((details) => {
      this.prdLis = details;
      console.log(this.prdLis);
    });
  }
}
