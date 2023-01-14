import { NgxPaginationModule } from "ngx-pagination";
import { ReactiveFormsModule } from "@angular/forms";
import { AddUsersComponent } from "./admin-tasks/add-users/add-users.component";
import { ListTasksComponent } from "./admin-tasks/list-tasks/list-tasks.component";
// import { AppModule } from './../../../../user/src/app/app.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainSystemRoutingModule } from "./main-system-routing.module";
import { MainComponent } from "./main/main.component";
import { MatDialogModule } from "@angular/material/dialog";

import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { UsersComponent } from "./admin-tasks/users/users.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [
    MainComponent,
    ListTasksComponent,
    AddUsersComponent,
    UsersComponent,
  ],
  imports: [
    MatTabsModule,
    MatExpansionModule,
    NgxPaginationModule,
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
  ],
})
export class MainSystemModule {}
