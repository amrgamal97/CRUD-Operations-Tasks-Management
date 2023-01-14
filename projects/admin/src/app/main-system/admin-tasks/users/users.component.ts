import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  dataSource: any = [];
  p: number = 1;
  totalPages: any;
  // userNames = this.userNameFilter();
  displayedColumns: string[] = [
    'position',
    'title',
    'user',
    'deadline',
    'actions',
  ];
  filter: any = {
    page: this.p,
    limit: 10,
  };
  constructor(
    private dialog: MatDialog,
    private data: DataService,
    private spin: NgxSpinnerService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUsersData();
    this.accessDataFromSubject();
  }
  // accessUsers() {
  //   let MODEL = {
  //     page: this.p,
  //     limit: 10,
  //     name: '',
  //   };
  //   this.data.accessUsers().subscribe((e: any) => {
  //     this.totalPages = e.totalItems;
  //     this.dataSource = e.users;
  //     console.log(this.dataSource);
  //   });
  // }

  getUsersData() {
    this.data.accessUsersData();
  }

  accessDataFromSubject() {
    this.data.userData.subscribe((e: any) => {
      this.dataSource = e.data;
      this.totalPages = e.totalPages;
    });
  }

  changePage(e: any) {
    this.p = e;
    this.filter['page'] = e;
    this.getUsersData();
  }
  deleteUser(e: any) {
    this.data.deleteUser(e._id).subscribe((e: any) => {
      this.getUsersData();
      this.toast.success('User Deleted Successfully', '');
    });
  }
  changeToActive(e: any) {
    let MODEL = {
      id: e._id,
      status: e.status,
    };
    this.data.changeUserStatus(MODEL).subscribe((e: any) => {
      this.getUsersData();
      this.toast.success('User Status Changed Successfully', '');
    });
  }
  changeToDeactive(e: any) {
    let MODEL = {
      id: e._id,
      status: e.status,
    };
    this.data.changeUserStatus(MODEL).subscribe((e: any) => {
      this.getUsersData();
      this.toast.success('User Status Changed Successfully', '');
    });
  }
}
