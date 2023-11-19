import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  id: string | null;
  details:any
  constructor(
    private activatedROute: ActivatedRoute,
    private order: OrderService
  ) {
    this.id = activatedROute.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getsubCategory();
  }
  getsubCategory() {
    this.order.getsubCategory(this.id).subscribe({
      next: (res) => {
        console.log(res.data);
        this.details=res.data
      },
    });
  }
}
