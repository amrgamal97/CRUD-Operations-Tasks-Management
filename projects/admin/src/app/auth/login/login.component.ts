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
    private router: Router
  ) {
    this.initiateForm();
    this.createForm();
  }

  // @ViewChild('secondarysidebar') second
  loginForm!: FormGroup;
  email!: FormControl;
  password!: FormControl;
  role!: FormControl;
  initiateForm() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.role = new FormControl('admin');
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
      role: this.role,
    });
  }

  ngOnInit(): void {}
  signIn() {
    this.ServicesService.login(this.loginForm.value).subscribe((e: any) => {
      localStorage.setItem('token', e.token);
      this.toast.success('Success!', 'Logged In Successfully, Redirecting...');
      setTimeout(() => {
        this.router.navigate(['/tasks']);
      }, 2000);
    });
  }
}
