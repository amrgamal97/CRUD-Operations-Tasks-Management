import { PreventGuardGuard } from './../../../admin/src/app/auth/prevent-guard.guard';
import { DashboardComponent } from './main-system/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { GuardGuard } from './core/guard.guard';
import { PreventLoginGuard } from './core/prevent-login.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // canActivate: [PreventGuard],
    canActivate: [PreventLoginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [PreventGuard],
    canActivate: [PreventLoginGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [PreventLoginGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
