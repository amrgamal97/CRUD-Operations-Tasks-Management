import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { AddUsersComponent } from './add-users/add-users.component';
import { BehaviorSubject } from 'rxjs';
// AddUsersComponent
export interface UserStatus {
  id: string;
  status: '';
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  userData = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  accessTasks() {
    return this.http.get(environment.baseApi + '/all-tasks');
  }

  createTask(model: any) {
    return this.http.post(environment.baseApi + '/add-task', model);
  }
  updateTask(model: any, id: number) {
    return this.http.put(environment.baseApi + '/edit-task/' + id, model);
  }
  deleteTask(id: number) {
    return this.http.delete(environment.baseApi + '/delete-task/' + id);
  }
  accessUsers() {
    return this.http.get(
      environment.baseApi.replace('tasks', 'auth') + '/users'
    );
  }
  deleteUser(id: any) {
    return this.http.get(
      environment.baseApi.replace('tasks', 'auth') + '/user/' + id
    );
  }

  changeUserStatus(model: UserStatus) {
    return this.http.put(
      environment.baseApi.replace('tasks', 'auth') + '/user-status',
      model
    );
  }

  // Accessing Users Data

  accessUsersData() {
    // let MODEL = {
    //   page: this.p,
    //   limit: 10,
    //   name: '',
    // };
    this.accessUsers().subscribe((e: any) => {
      this.userData.next({
        data: e.users,
        totalPages: e.totalItems,
      });
    });
  }
}
