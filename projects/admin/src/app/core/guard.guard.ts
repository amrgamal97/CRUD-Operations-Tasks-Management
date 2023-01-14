import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivateChild {
  constructor(private router: Router, private toast: ToastrService) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if ('token' in localStorage) {
      // this.router.navigate(['/tasks']);
      return true;
    } else {
      this.router.navigate(['/login']);
      this.toast.error('Please Login To Access Content');
      return false;
    }
  }
}
