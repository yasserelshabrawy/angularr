import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderServiceService } from 'src/app/Services/loader-service.service';



@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  isLoading: Subject<boolean> = this.LoaderService.isLoading;

  constructor(private LoaderService: LoaderServiceService) {
  }
}
