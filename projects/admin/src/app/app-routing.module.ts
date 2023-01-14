import { PreventGuardGuard } from './auth/prevent-guard.guard';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './main-system/admin-tasks/list-tasks/list-tasks.component';
import { UsersComponent } from './main-system/admin-tasks/users/users.component';
import { GuardGuard } from './core/guard.guard';
import { MainComponent } from './main-system/main/main.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./main-system/main-system.module').then(
  //       (e) => e.MainSystemModule
  //     ),
  // },
  // { path: 'sign-up', component: SignupComponent },

  { path: '', component: LoginComponent, canActivate: [PreventGuardGuard] },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [PreventGuardGuard],
  },
  {
    path: '',
    component: MainComponent,
    canActivateChild: [GuardGuard],
    children: [
      {
        path: 'tasks',
        component: ListTasksComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
  // { path: 'tasks', component: ListTasksComponent, canActivate: [GuardsGuard] },
  // { path: 'users', component: UsersComponent, canActivate: [GuardsGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
