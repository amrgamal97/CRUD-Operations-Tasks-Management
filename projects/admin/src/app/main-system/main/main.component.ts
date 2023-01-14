import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private toast: ToastrService) {}

  ngOnInit(): void {}
  signOut() {
    localStorage.removeItem('token');
    this.toast.success('Signed Out. We Hope To See You Soon');
  }
}
