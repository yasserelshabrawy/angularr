import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent {
  productId:string|null
  checkOut!: FormGroup;
  constructor(
    private HttpClient: HttpClient,
    private formbuilder: FormBuilder,
    private Router: Router,
    private order: OrderService,
    private activatedRoute: ActivatedRoute
  ) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('cartId');
    console.log(this.productId);

    this.checkOut = this.formbuilder.group({
      details: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }
  onlinePayment() {
    this.order.onlinePayment(this.productId, this.checkOut.value).subscribe({
      next:(res=>{
        console.log(res);
        if(res.status === 'success'){
          window.location.href = res.session.url
        }

      })
    })



  }
}
