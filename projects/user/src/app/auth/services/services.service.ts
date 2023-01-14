import { SIGNUP } from './../auth.model';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Login } from './authentications';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { environment } from 'projects/user/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth,
    private r: Router,
    private toast: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  login(model: any) {
    return this.http.post(
      environment.baseApi.replace('tasks', 'auth') + '/login',
      model
    );
  }

  signup(model: SIGNUP) {
    return this.http.post(
      environment.baseApi.replace('/tasks', '/auth') + '/createAccount',
      model
    );
  }
  //Login

  // signIn(email: any, password: any) {
  //   this.spinner.show();
  //   return this.auth.signInWithEmailAndPassword(email, password).then(
  //     () => {
  //       this.spinner.hide();
  //       this.toast.success('Redirecting..', 'Logged In Successfully!');
  //       localStorage.setItem('token', 'true');
  //       setTimeout(() => {
  //         this.r.navigate(['/tasks']);
  //       }, 2000);
  //     },
  //     (err) => {
  //       this.spinner.hide();
  //       alert('No Such Users Found! Please Register');
  //       this.r.navigate(['/login']);
  //     }
  //   );
  // }

  // //Register
  // signup(email: any, password: any) {
  //   this.spinner.show();
  //   this.auth.createUserWithEmailAndPassword(email, password).then(
  //     () => {
  //       this.spinner.hide();
  //       this.toast.success(
  //         'Success!',
  //         'Registered Successfully! Redirecting To Login Page'
  //       );
  //       setTimeout(() => {
  //         this.r.navigate(['/login']);
  //       }, 2000);
  //     },
  //     (err) => {
  //       this.spinner.hide();
  //       alert('Invalid Credentials! Please Try Again.');
  //       this.r.navigate(['/login']);
  //     }
  //   );
  // }

  // //signout
  // signout() {
  //   this.spinner.show();
  //   this.toast.success('Success!', 'Logged Out Successfully');
  //   this.auth.signOut().then(
  //     () => {
  //       this.spinner.hide();
  //       localStorage.removeItem('token');
  //       this.r.navigate(['/login']);
  //     },
  //     (err) => {
  //       this.spinner.hide();
  //       alert('Something Is Wrong!');
  //     }
  //   );
  // }
}
