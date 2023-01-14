import { ToastrService } from 'ngx-toastr';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddUsersComponent } from '../add-users/add-users.component';
import { MatSpinner } from '@angular/material/progress-spinner';
import { NgxSpinnerService } from 'ngx-spinner';

export interface PeriodicElement {
  title: string;
  user: string;
  deadLineDate: string;
  status: string;
}

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss'],
})
export class ListTasksComponent implements OnInit {
  dataSource: any = [];
  // userNames = this.userNameFilter();
  displayedColumns: string[] = [
    'position',
    'title',
    'user',
    'deadline',
    'status',
    'actions',
  ];
  constructor(
    private dialog: MatDialog,
    private data: DataService,
    private spin: NgxSpinnerService,
    private toast: ToastrService
  ) {}
  arrTest: any[] = [];
  ngOnInit(): void {
    this.accessTasks();
  }
  addTask() {
    const dialogRef = this.dialog.open(AddUsersComponent, {
      width: '500px',
    });
    // this.accessTasks();
    // this.dialog.ngOnDestroy();
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.accessTasks();
      }
    });
  }
  accessTasks() {
    this.data.accessTasks().subscribe((e: any) => {
      this.spin.hide();
      // console.log(e);
      this.dataSource = this.userNameFilter(e.tasks);
      // this.deleteTask(e.tasks);
      // console.log(this.deleteTask(e.tasks));
      // console.log();
    });
  }
  userNameFilter(data: any) {
    let users = data.map((e: any) => {
      console.log(e);
      return { ...e, user: e.userId.username };
    });
    // console.log(users);
    return users;
  }
  deleteTask(task: any) {
    this.data.deleteTask(task).subscribe((e: any) => {
      this.toast.success('Task Deleted!', '');
      this.accessTasks();
    });
  }
  updateTask(taskData: any) {
    // this.dialog.open();
    const dialogRef = this.dialog.open(AddUsersComponent, {
      width: '500px',
      data: taskData,
    });
    // this.accessTasks();
    // this.dialog.ngOnDestroy();
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.accessTasks();
      }
    });
  }
}
