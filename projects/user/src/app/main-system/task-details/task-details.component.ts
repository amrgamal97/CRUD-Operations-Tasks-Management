import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TasksServiceService } from './../../services/tasks-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public taskData: any,
    private data: TasksServiceService,
    private toast: ToastrService,
    private dialog: MatDialog,
    private r: Router
  ) {}
  taskDetails: any;
  objectPass: any = Object.assign(this.taskData);
  ngOnInit(): void {
    this.getTaskDetails();
  }
  // this.taskData
  getTaskDetails() {
    this.taskData = this.taskDetails;
    console.log(this.objectPass);
  }
  // getUserData(){
  //   this.data
  // };
  complete(element: any) {
    const MODEL = {
      id: element._id,
    };
    this.data.taskStatusCheck(MODEL).subscribe((e) => {
      //  this.getUserData();
      this.dialog.closeAll();
      // this.r.navigate(['/dashboard']);
      this.toast.success('Task Completed Successfully!', 'Success');
    });
  }
}
