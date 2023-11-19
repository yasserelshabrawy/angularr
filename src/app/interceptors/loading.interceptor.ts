import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

import { LoaderServiceService } from '../Services/loader-service.service';



@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loader: LoaderServiceService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
     this.loader.isLoading.next(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.loader.isLoading.next(false);
      })
    );
  }
}
