import { CoreModuleModule } from './core/core.module.module';
import { MainSystemModule } from './main-system/main-system.module';
import { ServicesService } from './auth/services/services.service';
import { environment } from './../../../admin/src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthModuleModule } from './auth/auth-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material-module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,
    // MainComponent,
    // AddUsersComponent,
    // ListTasksComponent,
  ],
  imports: [
    CoreModuleModule,
    MainSystemModule,
    MatButtonModule,
    BrowserModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    AuthModuleModule,
    RouterModule,
    MaterialExampleModule,
    // AuthModuleModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-fade' }),
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
