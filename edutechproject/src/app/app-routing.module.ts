import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'assignment/:id', component: AssignmentDetailComponent }, // Protect dashboard with AuthGuard

  { path: 'editassignment/:id', component: EditAssignmentComponent },
    { path: 'create-assignment', component: CreateAssignmentComponent },
    // Other routes
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
