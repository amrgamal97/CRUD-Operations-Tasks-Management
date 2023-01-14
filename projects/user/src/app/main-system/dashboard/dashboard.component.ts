import { MatDialog } from '@angular/material/dialog';
import { TaskDetailsComponent } from './../task-details/task-details.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { TasksServiceService } from '../../services/tasks-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  p: any = 1;
  taskDetailsShip: any = new EventEmitter<any>();
  total: any;
  userData: any = '';
  filter: any = {
    page: this.p,
    limit: 10,
  };
  displayedColumns: string[] = [
    'position',
    'title',
    'user',
    'deadLineDate',
    'status',
    'actions',
  ];

  status: any = [
    { name: 'Completed', id: 1 },
    { name: 'In-Progress', id: 2 },
  ];

  selectedStatus: any = 'In-Progress';

  dataSource: any = [];
  dialog: any;
  constructor(
    private router: Router,
    private data: TasksServiceService,
    private toast: ToastrService,
    private dialogs: MatDialog
  ) {
    this.getTasks();
    this.getUserData();
  }
  ngOnInit(): void {}

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getTasks() {
    let userToken = JSON.stringify(localStorage.getItem('token'));
    this.userData = JSON.parse(window.atob(userToken.split('.')[1]));
    // console.log(this.userData);
  }

  getUserData() {
    let param = {
      page: this.p,
      limit: 10,
      status: this.selectedStatus,
    };
    console.log(this.userData.userId, param);
    this.data.getUserTasks(this.userData.userId, param).subscribe(
      (e: any) => {
        this.total = e.totalItems;
        this.dataSource = e.tasks;
      },
      (err) => {
        this.dataSource = [];
      }
    );
  }
  changePage(e: any) {
    this.p = e;
    this.filter['page'] = e;
    this.getTasks();
  }
  taskStatus(element: any) {
    const MODEL = {
      id: element._id,
    };
    this.data.taskStatusCheck(MODEL).subscribe((e) => {
      this.getUserData();
      this.toast.success('Task Completed Successfully!', 'Success');
    });
    console.log(element);
  }
  taskDetails(element: any) {
    // console.log(element._id);

    this.data.getTaskDetails(element._id).subscribe((e: any) => {
      // console.log(e);
      // this.taskDetailsShip.emit(e)

      const dialogRef = this.dialogs.open(TaskDetailsComponent, {
        width: '500px',
        data: e,
      });
      dialogRef.afterClosed().subscribe(() => {
        this.getUserData();
      });
    });
  }
  accessTasks() {
    throw new Error('Method not implemented.');
  }
}
