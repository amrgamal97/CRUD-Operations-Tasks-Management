import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  constructor(private http: HttpClient) {}
  getUserTasks(id: any, param: any) {
    let params = new HttpParams();
    Object.entries(param).forEach(([key, value]: any) => {
      params = params.append(key, value);
    });
    return this.http.get(environment.baseApi + '/user-tasks/' + id, { params });
    console.log(param);
  }

  taskStatusCheck(model: object) {
    return this.http.put(environment.baseApi + '/complete', model);
  }

  getTaskDetails(id: any) {
    return this.http.get(environment.baseApi + '/task/' + id);
  }
}
