import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<any>();

  profileData: any = {
    name: '',
    gender: '',
    department: '',
    email:"",
    mob: '',
  };

  constructor(private authService: AuthService) {

  }
ngOnInit() {
    const localDataString = localStorage.getItem("insturcterprofile");
    console.log(localDataString)
    const localData = localDataString ? JSON.parse(localDataString) : {};
    this.profileData.email = localData.useremail || "";

  }

  createProfile() {
    // Emit the created profile data
    // console.log(this.profileData)
    this.create.emit(this.profileData);
  }

  cancelCreate() {
    // Emit the cancel event
    this.cancel.emit();
  }
}
