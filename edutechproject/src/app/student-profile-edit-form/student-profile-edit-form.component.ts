import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService  } from '../auth.service';

@Component({
  selector: 'app-student-profile-edit-form',
  templateUrl: './student-profile-edit-form.component.html',
  styleUrls: ['./student-profile-edit-form.component.css']
})
export class StudentProfileEditFormComponent {
  constructor(private authService: AuthService, private apiService: ApiService) {}

  @Input() studentprofileDataCopy: any;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  editingstudentProfile = false;
  studentprofileData: any = {
    name: '',
    gender: '',
  major: '',
    email:"",
    mob: '',
    studentId:"",
    dob:""
  };
  ngOnInit() {
    const localDataString = localStorage.getItem("insturcterprofile");
    // console.log(localDataString)
    const localData = localDataString ? JSON.parse(localDataString) : {};
    this.studentprofileData.email = localData.useremail || "";
    this.getstudentProfile();

  }
 

  getstudentProfile() {
    this.apiService.getstudentProfile().subscribe(
      (response: any) => {
        // console.log(response)
        this.studentprofileData = response.msg;
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
  saveEditedstudentProfile() {
    // Emit the edited profile data to save
    console.log(this.studentprofileData)
    this.save.emit(this.studentprofileData);
  }

  cancelstudentEdit() {
    // Emit the cancel event to exit edit mode
    this.cancel.emit();
  }
}
