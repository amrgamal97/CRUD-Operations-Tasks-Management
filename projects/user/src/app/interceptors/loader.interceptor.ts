import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private toast: ToastrService, private spin: NgxSpinnerService) {}

  counter = 0;
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // console.log(request, next);
    this.spin.show();
    this.counter++;
    return next.handle(request).pipe(
      finalize(() => {
        this.counter--;
        if (this.counter === 0) {
          this.spin.hide();
        }
        // console.log(request);
      })
    );
  }
}
