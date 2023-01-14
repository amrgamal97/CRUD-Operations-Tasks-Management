import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSystemRoutingModule } from './main-system-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  declarations: [],
  imports: [
    // MatListModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    MainSystemRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [MatListModule],
})
export class MainSystemModule {}
