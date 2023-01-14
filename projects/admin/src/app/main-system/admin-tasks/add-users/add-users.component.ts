import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Spinner, NgxSpinnerService } from 'ngx-spinner';
import { Task } from './../model';
import { ToastrService } from 'ngx-toastr';
import { DataService } from './../data.service';
import { Component, EventEmitter, OnInit, Output, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';

import * as moment from 'moment';
// import { Task } from '../model';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
})
export class AddUsersComponent implements OnInit {
  update: boolean = false;
  taskInfo: any = [];
  users = [];
  fileName: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) private taskData: any,
    private data: DataService,
    private toast: ToastrService,
    private spin: NgxSpinnerService,
    private dialog: MatDialogRef<AddUsersComponent>
  ) {
    this.initialForm();
    this.createForm();
    this.accessDataFromSubject();
  }
  createTask!: FormGroup;
  title!: FormControl;
  userId!: FormControl;
  image!: FormControl;
  deadline!: FormControl;
  description!: FormControl;

  ngOnInit(): void {
    this.getUsers();
  }

  initialForm() {
    this.title = new FormControl(this.taskData?.title || '', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.userId = new FormControl(
      this.taskData?.userId?._id || '',
      Validators.required
    );
    // this.image = new FormControl('', Validators.required);
    this.deadline = new FormControl(
      this.taskData
        ? new Date(
            this.taskData?.deadline.split('-').reverse().join('-')
          ).toISOString()
        : '',
      Validators.required
    );
    this.description = new FormControl(
      this.taskData?.description || '',
      Validators.required
    );
  }

  createForm() {
    this.createTask = new FormGroup({
      title: this.title,
      userId: this.userId,
      // image: this.image,
      deadline: this.deadline,
      description: this.description,
    });
    if (this.taskData === null) {
      this.update = true;
    }
  }

  // selectImage(id: any) {
  //   this.fileName = id.target.value;
  //   this.createTask.get('image')?.setValue(id.target.files[0]);
  //   // console.log(this.createTask);
  // }

  createNewTask() {
    let newModel: any = this.newFormData();

    console.log(this.createTask);
    this.data.createTask(newModel).subscribe((e: any) => {
      this.toast.success('Task Created Successfully');
      this.dialog.close(true);
    });
  }

  updateTask() {
    let newModel: any = this.newFormData();
    console.log(this.createTask);
    this.data.updateTask(newModel, this.taskData._id).subscribe((e: any) => {
      this.toast.success('Task Updated Successfully');
      this.dialog.close(true);
    });
  }

  newFormData() {
    let modifiedDate = moment(this.createTask.value['deadline']).format(
      'DD-MM-YYYY'
    );
    this.createTask.get('deadline')?.setValue(modifiedDate);
    let formData: any = new FormData();
    formData.append('title', this.createTask.value['title']);
    formData.append('userId', this.createTask.value['userId']);
    // formData.append('image', this.createTask.value['image']);
    formData.append('deadline', this.createTask.value['deadline']);
    formData.append('description', this.createTask.value['description']);
    console.log(formData);
    // Object.entries(this.createTask.value).forEach(([key, value]: any) => {
    //   // console.log(key, value);
    //   // console.log();
    //   if (key == 'deadline') {
    //     formData.append(key, modifiedDate);
    //   } else {
    //     formData.append(key, value);
    //   }
    return formData;
  }

  getUsers() {
    this.data.accessUsersData();
  }
  accessDataFromSubject() {
    this.data.userData.subscribe((e: any) => {
      this.users = this.usersFiltering(e.data);
    });
  }
  usersFiltering(data: any) {
    let arr = data?.map((e: any) => {
      return {
        name: e.username,
        id: e._id,
      };
    });
    return arr;
  }
}
