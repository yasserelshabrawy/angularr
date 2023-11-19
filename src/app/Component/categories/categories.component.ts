import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit{
  category:any
  constructor(private order: OrderService) {

  }
  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
     this.order.getCategory().subscribe({
        next: (res) => {
           this.category = res.data
          console.log(this.category);
        },
      });
  }
}
