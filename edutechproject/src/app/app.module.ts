import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from "./registration/registration.component"
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileEditFormComponent } from './profile-edit-form/profile-edit-form.component';
import { StudentCreateProfileComponent } from './student-create-profile/student-create-profile.component';
import { StudentProfileEditFormComponent } from './student-profile-edit-form/student-profile-edit-form.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
RegistrationComponent,
    DashboardComponent,
    CreateProfileComponent,
    ProfileEditFormComponent,
    StudentCreateProfileComponent,
    StudentProfileEditFormComponent,
    AssignmentDetailComponent,
    CreateAssignmentComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule // Include FormsModule here
  ],
  providers: [AuthGuard], // Provide AuthGuard
  bootstrap: [AppComponent],
})
export class AppModule {}
