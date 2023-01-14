import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SIGNUP } from './../auth.model';
import { ServicesService } from '../services/services.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthModuleModule } from '../auth-module.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private data: ServicesService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.initiateForm();
    this.createForm();
  }

  ngOnInit(): void {}
  signUpForm!: FormGroup;
  username!: FormControl;
  email!: FormControl;
  password!: FormControl;
  confirmPassword!: FormControl;
  role!: FormControl;

  initiateForm() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.role = new FormControl('user');
  }

  createForm() {
    this.signUpForm = new FormGroup(
      {
        userName: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        role: this.role,
      },
      { validators: this.validatePassword }
    );
  }
  signUp() {
    const MODEL: SIGNUP = {
      email: this.signUpForm.value['email'],
      username: this.signUpForm.value['userName'],
      password: this.signUpForm.value['password'],
      role: this.signUpForm.value['role'],
    };
    console.log(this.signUpForm.value);
    this.data.signup(MODEL).subscribe((e: any) => {
      this.toast.success('Account Created Successfully', '');
      this.router.navigate(['/login']);
    });
  }

  validatePassword: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let password = group.get('password')?.value;
    let confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { errorPass: true };
  };
}
