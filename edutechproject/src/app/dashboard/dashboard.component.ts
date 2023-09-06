import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  profileData: any = null;

  loginuser:any=localStorage.getItem("loginas")
  creatingProfile: boolean = false;
  editingProfile = false; // Initialize the editingProfile flag
  assignments: any[] = []; // Initialize with an empty array or fetch data from your service
  constructor(
    private router: Router,
    private apiService: ApiService // Inject ApiService
  ) {}


  ngOnInit() {
    this.getUserProfile();
    this.getstudentProfile()
   this.getallassignments()
    this.apiService.getAllAssignments().subscribe((data) => {
      this.assignments = data;
    });
    this.apiService.getInstructorAssignments().subscribe((data:any) => {
      this.assignments = data.msg;
    });
  
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

getallassignments(){
  this.apiService.getAllAssignments().subscribe((response:any)=>{
  this.assignments=response.msg
  },(error)=>{
    console.log(error.error.msg)
  })
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
    console.log(this.editProfile)
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

// studnetprofilesystem<<<<<<<=<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
studenteditingProfile=false
studentprofileData:any=null;
editingstudentProfile:boolean=false
creatingstudentProfile:boolean=false
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


createstudentProfile(studentprofileData: any) {
  this.apiService.createstudentProfile(studentprofileData).subscribe(
    (response: any) => {
      console.log('Profile created:', response);
      this.getstudentProfile(); // Refresh the profile data
      this.creatingstudentProfile = false; // Close the create profile form
    },
    (error) => {
      alert(error.error.msg)
    }
  );
}

toggleCreatingstudentProfile() {
  this.creatingstudentProfile = !this.creatingstudentProfile;
  console.log(this.creatingstudentProfile)
  // console.log(this.editstudentProfile)
}

openCreatestudentProfileForm() {
  this.toggleCreatingstudentProfile(); // You can use toggle method here
}
studentprofileDataCopy: any = {}; // Used for editing


savestudentEditedProfile(editedProfile: any) {
  const profileId = this.studentprofileData.id; // Update with actual ID
  this.apiService.editstudentProfile(profileId, editedProfile).subscribe(
    (response: any) => {
      console.log('Profile edited:', response);
      this.getstudentProfile();
      this.creatingstudentProfile = false;
      this.editingstudentProfile=false

      alert(response.msg)
    },
    (error: any) => { // Explicitly define the error type as 'any'
      console.error('Error editing profile:', error);
      alert(error.error.msg)
    }
  );
}

cancelEditstudentProfile() {
this.creatingstudentProfile = false;
}
editstudentProfile() {
  this.creatingstudentProfile = true;
  // Pre-fill the profileData for editing
  this.studentprofileDataCopy = { ...this.studentprofileData };
}

toggleEditingstudentProfile() {
  this.editingstudentProfile = true;
}

cancelstudentEdit() {
  this.editingstudentProfile = false;
}

// assignments
// openAssignmentCreationForm() {
//   // You can navigate to a new route or show a modal for assignment creation
//   // Example: Navigate to a route for assignment creation
//   this.router.navigate(['/create-assignment']);
// }

openCreateAssignmentForm() {
  // You can navigate to a new route or show a modal for assignment creation
  // Example: Navigate to a route for assignment creation
  this.router.navigate(['/create-assignment']);
}

}
