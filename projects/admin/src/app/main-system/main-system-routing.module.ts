import { UsersComponent } from './admin-tasks/users/users.component';
import { AddUsersComponent } from './admin-tasks/add-users/add-users.component';
import { MainComponent } from './main/main.component';
import { ListTasksComponent } from './admin-tasks/list-tasks/list-tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainComponent,
  //   canActivateChild: [GuardGuard],
  //   children: [
  //     {
  //       path: 'tasks',
  //       component: ListTasksComponent,
  //     },
  //     {
  //       path: 'users',
  //       component: UsersComponent,
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
