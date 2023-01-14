import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router, private toast: ToastrService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if ('token' in localStorage) {
      // this.router.navigate(['/dashboard']);
      return true;
    } else {
      this.router.navigate(['/login']);
      this.toast.error('Please Login To Access Content');
      return false;
    }
  }
}
