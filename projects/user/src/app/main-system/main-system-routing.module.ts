import { RegisterComponent } from './../auth/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: RegisterComponent,
  //     },
  //     // {
  //     //   path: 'users',
  //     //   component: AddUsersComponent,
  //     // },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainSystemRoutingModule {}
