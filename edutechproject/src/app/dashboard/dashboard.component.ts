import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  profileData: any = null;
  creatingProfile: boolean = false;
  editingProfile = false; // Initialize the editingProfile flag
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.apiService.getUserProfile().subscribe(
      (response: any) => {
        console.log(response)
        this.profileData = response.msg;
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  createProfile(profileData: any) {
    this.apiService.createProfile(profileData).subscribe(
      (response: any) => {
        console.log('Profile created:', response);
        this.getUserProfile(); // Refresh the profile data
        this.creatingProfile = false; // Close the create profile form
      },
      (error) => {
        alert(error.error.msg)
      }
    );
  }

  toggleCreatingProfile() {
    this.creatingProfile = !this.creatingProfile;
  }

  openCreateProfileForm() {
    this.toggleCreatingProfile(); // You can use toggle method here
  }
  profileDataCopy: any = {}; // Used for editing


  saveEditedProfile(editedProfile: any) {
    const profileId = this.profileData.id; // Update with actual ID
    this.apiService.editProfile(profileId, editedProfile).subscribe(
      (response: any) => {
        console.log('Profile edited:', response);
        this.getUserProfile();
        this.creatingProfile = false;
        this.editingProfile=false

        alert(response.msg)
      },
      (error: any) => { // Explicitly define the error type as 'any'
        console.error('Error editing profile:', error);
        alert(error.error.msg)
      }
    );
  }

cancelEditProfile() {
  this.creatingProfile = false;
}
  editProfile() {
    this.creatingProfile = true;
    // Pre-fill the profileData for editing
    this.profileDataCopy = { ...this.profileData };
  }
 
  toggleEditingProfile() {
    this.editingProfile = true;
  }
  
  cancelEdit() {
    this.editingProfile = false;
  }





}
