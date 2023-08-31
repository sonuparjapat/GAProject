import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService  } from '../auth.service';
@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.css'],
})
export class ProfileEditFormComponent {
  constructor(private authService: AuthService, private apiService: ApiService) {}

  @Input() profileDataCopy: any;
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  editingProfile = false;
  profileData: any = {
    name: '',
    gender: '',
    department: '',
    email:"",
    mob: '',
  };
  ngOnInit() {
    const localDataString = localStorage.getItem("insturcterprofile");
    // console.log(localDataString)
    const localData = localDataString ? JSON.parse(localDataString) : {};
    this.profileData.email = localData.useremail || "";
    this.getUserProfile();

  }
 

  getUserProfile() {
    this.apiService.getUserProfile().subscribe(
      (response: any) => {
        // console.log(response)
        this.profileData = response.msg;
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
  saveEditedProfile() {
    // Emit the edited profile data to save
    console.log(this.profileData)
    this.save.emit(this.profileData);
  }

  cancelEdit() {
    // Emit the cancel event to exit edit mode
    this.cancel.emit();
  }
}
