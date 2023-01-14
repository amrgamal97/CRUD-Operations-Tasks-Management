import { AuthModuleModule } from './auth/auth-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from '@angular/fire/compat';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';
import { DashboardComponent } from './main-system/dashboard/dashboard.component';
import { CoreModuleModule } from './core/core-module.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { TaskDetailsComponent } from './main-system/task-details/task-details.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, TaskDetailsComponent],
  imports: [
    // BrowserModule,
    MatDialogModule,
    MatListModule,
    // AppRoutingModule,
    // ReactiveFormsModule,
    // AuthModuleModule,
    // CoreModuleModule,
    // MainSystemModule,
    NgxPaginationModule,
    MatButtonModule,
    BrowserModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    AuthModuleModule,
    RouterModule,
    // MaterialExampleModule,
    // AuthModuleModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-fade' }),
    CoreModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
