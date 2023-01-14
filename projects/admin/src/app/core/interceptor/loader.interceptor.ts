import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

let counter = 0;
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    counter++;
    this.spinner.show();
    return next.handle(request).pipe(
      finalize(() => {
        // this.spinner.hide();
        counter--;
        if (counter == 0) {
          this.spinner.hide();
        }
      })
    );
  }
}
