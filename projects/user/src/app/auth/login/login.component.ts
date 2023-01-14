import { Login } from './../services/authentications';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
// import { Login } from '../../../../../user/src/app/auth/services/authentications';
// Login
import { ServicesService } from '../services/services.service';
import { Component, OnInit, Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';
import { LOGININFO } from '../login.model';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private form: FormBuilder,
    private ServicesService: ServicesService,
    private spinner: NgxSpinnerService,
    private toast: ToastrService,
    private router: Router,
    private data: ServicesService
  ) {
    this.initiateForm();
    this.createForm();
  }

  // @ViewChild('secondarysidebar') second
  loginForms!: FormGroup;
  email!: FormControl;
  password!: FormControl;
  role!: FormControl;
  initiateForm() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.role = new FormControl('user');
  }

  createForm() {
    this.loginForms = new FormGroup({
      email: this.email,
      password: this.password,
      role: this.role,
    });
  }

  signIn() {
    let MODEL: LOGININFO = {
      email: (this.email = this.loginForms.value['email']),
      password: (this.password = this.loginForms.value['password']),
      role: (this.role = this.loginForms.value['role']),
    };
    console.log(this.loginForms.value);
    this.data.login(MODEL).subscribe((e: any) => {
      localStorage.setItem('token', e.token);
      this.toast.success('Signed In Successfully!', 'Redirecting..');
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
    });
  }
  ngOnInit(): void {}
}
