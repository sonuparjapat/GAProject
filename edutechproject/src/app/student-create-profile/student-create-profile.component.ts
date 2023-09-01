
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-student-create-profile',
  templateUrl: './student-create-profile.component.html',
  styleUrls: ['./student-create-profile.component.css']
})
export class StudentCreateProfileComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<any>();

  studentprofileData: any = {
    name: '',
    gender: '',
  major: '',
    email:"",
    mob: '',
    studentId:"",
    dob:""
  };

  constructor(private authService: AuthService) {

  }
ngOnInit() {
    const localDataString = localStorage.getItem("insturcterprofile");
    // console.log(localDataString)
    const localData = localDataString ? JSON.parse(localDataString) : {};
    this.studentprofileData.email = localData.useremail || "";

  }

  createstudentProfile() {
    // Emit the created profile data
    // console.log(this.profileData)
    this.create.emit(this.studentprofileData);
  }

  cancelstudentCreate() {
    // Emit the cancel event
    this.cancel.emit();
  }
}
